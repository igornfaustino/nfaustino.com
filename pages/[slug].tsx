import { FC } from "react";

import { format, parseISO } from "date-fns";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import styled from "styled-components";

import CodeBlock from "../src/components/atoms/CodeBlock";
import HyperLink from "../src/components/atoms/HipperLink";
import { Title } from "../src/components/atoms/Title";
import CenteredImage from "../src/components/molecules/CenteredImage";
import BaseLayout from "../layouts/BaseLayout";
import { getPostReadingTime } from "../lib/post";
import { client, ssrCache } from "../lib/urql";
import {
  AllPostsDocument,
  AllPostsQuery,
  GetPostBySlugDocument,
  useGetPostBySlugQuery,
} from "../src/generated/graphql";
import NotFound from "./404";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 700px;
  padding: 8px;
  flex-direction: column;
  margin-bottom: 64px;

  @media (max-width: 700px) {
    width: 100vw;
  }

  p {
    width: 100%;
  }

  table,
  tr,
  td,
  th {
    border: 1px solid #555;
  }

  blockquote {
    padding: 0 1em;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
  }

  .youtube-video-container {
    position: relative;
    overflow: hidden;
    width: 100%;
  }

  .youtube-video-container::after {
    display: block;
    content: "";
    padding-top: 56.25%;
  }

  .youtube-video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const StyledTitle = styled(Title)`
  margin-top: 8px;
  margin-bottom: 8px;
`;

const Description = styled.p`
  margin: 0;
  opacity: 0.6;
  font-size: 14px;
  margin-bottom: 32px;
  text-align: left;
  width: 100%;
`;

const DateTime = styled.span`
  font-size: 14px;
  margin-top: 16px;
`;

const StyledHyperLink = styled(HyperLink)`
  font-size: 14px;
`;

const Post: NextPage<{ slug: string }> = function ({ slug }) {
  const [{ data }] = useGetPostBySlugQuery({
    variables: {
      slug,
    },
  });

  if (!data?.post) return <NotFound />;

  const { content, ...metadata } = data.post;
  const readingTime = getPostReadingTime(content);

  const formattedDate = format(parseISO(metadata.date), "LLL dd, yyyy");

  return (
    <BaseLayout>
      <NextSeo title={metadata.title} description={metadata.description} />

      <Wrapper>
        <Link href="/blog" passHref>
          <StyledHyperLink>← Back</StyledHyperLink>
        </Link>
        <DateTime>
          {formattedDate} · {readingTime} min read
        </DateTime>
        <StyledTitle>{metadata.title}</StyledTitle>
        <Description>{metadata.description}</Description>

        <ReactMarkdown
          skipHtml={false}
          rehypePlugins={[rehypeRaw]}
          components={{
            code: CodeBlock,
            h1: Title as FC,
            a: HyperLink as FC,
            img: CenteredImage,
          }}
        >
          {content}
        </ReactMarkdown>
      </Wrapper>
    </BaseLayout>
  );
};

type StaticPostProps = {
  slug: string;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as StaticPostProps;
  await client.query(GetPostBySlugDocument, { slug }).toPromise();

  return {
    props: {
      slug,
      urqlState: ssrCache.extractData(),
    },
  };
};

export const getStaticPaths: GetStaticPaths<StaticPostProps> = async () => {
  const { data } = await client
    .query<AllPostsQuery>(AllPostsDocument)
    .toPromise();
  const paths =
    data?.posts.map((post) => ({
      params: { slug: post.slug },
    })) || [];

  return {
    paths,
    fallback: "blocking",
  };
};

export default Post;
