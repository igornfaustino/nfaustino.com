import { motion } from "framer-motion";
import { useKBar } from "kbar";
import type { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import styled from "styled-components";

import { Title } from "../components/atoms/Title";
import TypeWriterText from "../components/atoms/TypeWriterText";
import {
  GetPageByUrlDocument,
  useGetPageByUrlQuery,
} from "../generated/graphql";
import BaseLayout from "../layouts/BaseLayout";
import { client, ssrCache } from "../lib/urql";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  padding: 8px;

  @media (max-width: 500px) {
    width: 100vw;
  }
`;

const CenterGroup = styled.div`
  width: 100%;
`;

const GetStarted = styled(motion.p)`
  cursor: pointer;
  width: fit-content;
  padding: 8px;
  border-radius: 3px;
  transition: all 200ms;
  text-decoration: underline;
`;

const Home: NextPage = function () {
  const { query } = useKBar();
  const [{ data }] = useGetPageByUrlQuery({ variables: { url: "index" } });

  return (
    <BaseLayout>
      <NextSeo
        title={undefined}
        description="Creating amazing solutions with code"
      />

      <Wrapper>
        <CenterGroup>
          <Title>{data?.page?.title}</Title>
          <TypeWriterText>{data?.page?.description || ""}</TypeWriterText>
          <GetStarted whileHover={{ scale: 1.1 }} onClick={query.toggle}>
            Get started →
          </GetStarted>
        </CenterGroup>
      </Wrapper>
    </BaseLayout>
  );
};

const MINUTE = 60;

export const getStaticProps: GetStaticProps = async () => {
  await client.query(GetPageByUrlDocument, { url: "index" }).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
    revalidate: 5 * MINUTE,
  };
};

export default Home;
