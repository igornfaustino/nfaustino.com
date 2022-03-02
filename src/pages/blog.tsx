import type { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import styled from "styled-components";

import { Title } from "../components/atoms/Title";
import { BlogList } from "../components/organisms/BlogList";
import BaseLayout from "../layouts/BaseLayout";
import { client, ssrCache } from "../lib/urql";
import {
  AllPostsDocument,
  GetPageByUrlDocument,
  useAllPostsQuery,
  useGetPageByUrlQuery,
} from "../generated/graphql";
import Markdown from "../components/atoms/Markdown";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 700px;
  padding: 8px;
  flex-direction: column;
  margin-bottom: 64px;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const getPostReadingTime = (content: string) => {
  const wpm = 225;
  const words = content.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);

  return time;
};

const Blog: NextPage = function () {
  const [{ data: pageData }] = useGetPageByUrlQuery({
    variables: { url: "blog" },
  });
  const pageDescription = pageData?.page?.description || "";

  const [{ data }] = useAllPostsQuery();

  const posts =
    data?.posts.map((post) => ({
      ...post,
      readingTime: getPostReadingTime(post.content),
    })) || [];

  return (
    <BaseLayout>
      <NextSeo title="Blog" description={pageDescription} />

      <Wrapper>
        <Title>{pageData?.page?.title}</Title>

        <Markdown content={pageDescription} />

        <hr style={{ width: "100%" }} />

        <BlogList posts={posts} />
      </Wrapper>
    </BaseLayout>
  );
};

const MINUTE = 60;

export const getStaticProps: GetStaticProps = async () => {
  await client.query(AllPostsDocument).toPromise();
  await client.query(GetPageByUrlDocument, { url: "blog" }).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
    revalidate: 5 * MINUTE,
  };
};

export default Blog;
