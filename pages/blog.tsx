import type { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import styled from "styled-components";

import { Title } from "../src/components/atoms/Title";
import { BlogList } from "../src/components/organisms/BlogList";
import useSpotlightActions from "../src/hooks/useSpotlightActions";
import BaseLayout from "../layouts/BaseLayout";
import { client, ssrCache } from "../lib/urql";
import { AllPostsDocument, useAllPostsQuery } from "../src/generated/graphql";

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
  const pageDescription = `Here you will be able to find all posts I wrote. 
	You can find posts about development, productivity, and everything that's in my mind. 
	Posts are in both Portuguese and English. Hope you like :)`;

  const [{ data }] = useAllPostsQuery();

  const posts =
    data?.posts.map((post) => ({
      ...post,
      readingTime: getPostReadingTime(post.content),
    })) || [];

  useSpotlightActions(posts);

  return (
    <BaseLayout>
      <NextSeo title="Blog" description={pageDescription} />

      <Wrapper>
        <Title>Personal Blog</Title>

        <p>{pageDescription}</p>

        <hr style={{ width: "100%" }} />

        <BlogList posts={posts} />
      </Wrapper>
    </BaseLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  await client.query(AllPostsDocument).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  };
};

export default Blog;
