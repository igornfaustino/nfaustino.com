import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import styled from "styled-components";

import HyperLink from "../components/atoms/HipperLink";
import Markdown from "../components/atoms/Markdown";
import { Title } from "../components/atoms/Title";
import { ProjectList } from "../components/organisms/ProjectList";
import {
  GetPageByUrlDocument,
  useGetPageByUrlQuery,
} from "../generated/graphql";
import BaseLayout from "../layouts/BaseLayout";
import { client, ssrCache } from "../lib/urql";

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

const Projects: NextPage = function () {
  const [{ data }] = useGetPageByUrlQuery({ variables: { url: "projects" } });

  return (
    <BaseLayout>
      <NextSeo
        title={data?.page?.title}
        description={data?.page?.description || ""}
      />

      <Wrapper>
        <Title>{data?.page?.title}</Title>
        <Markdown content={data?.page?.description || ""} />

        <hr style={{ width: "100%" }} />

        <ProjectList />
      </Wrapper>
    </BaseLayout>
  );
};

const MINUTE = 60;

export const getStaticProps: GetStaticProps = async () => {
  await client.query(GetPageByUrlDocument, { url: "projects" }).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
    revalidate: 5 * MINUTE,
  };
};

export default Projects;
