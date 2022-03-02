import type { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import styled from "styled-components";

import HyperLink from "../components/atoms/HipperLink";
import Markdown from "../components/atoms/Markdown";
import { Title } from "../components/atoms/Title";
import CareerList from "../components/organisms/CareerList";
import EducationList from "../components/organisms/EducationList";
import {
  AboutInfoDocument,
  GetPageByUrlDocument,
  useAboutInfoQuery,
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

const About: NextPage = function () {
  const [{ data }] = useGetPageByUrlQuery({ variables: { url: "about" } });
  const [{ data: AboutInfo }] = useAboutInfoQuery();

  return (
    <BaseLayout>
      <NextSeo
        title={data?.page?.title}
        description={data?.page?.description || ""}
      />

      <Wrapper>
        <Title>{data?.page?.title}</Title>
        <Markdown content={data?.page?.description} />

        <hr style={{ width: "100%" }} />

        <h2>Career</h2>

        <CareerList jobs={AboutInfo?.jobs || []} />

        <hr style={{ width: "100%" }} />

        <h2>Education</h2>

        <EducationList education={AboutInfo?.educations || []} />
      </Wrapper>
    </BaseLayout>
  );
};

const MINUTE = 60;

export const getStaticProps: GetStaticProps = async () => {
  await client.query(GetPageByUrlDocument, { url: "about" }).toPromise();
  await client.query(AboutInfoDocument).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
    revalidate: 5 * MINUTE,
  };
};

export default About;
