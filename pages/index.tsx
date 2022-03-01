import { motion } from "framer-motion";
import { useKBar } from "kbar";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import styled from "styled-components";

import { Title } from "../src/components/atoms/Title";
import TypeWriterText from "../src/components/atoms/TypeWriterText";
import BaseLayout from "../src/layouts/BaseLayout";

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

  return (
    <BaseLayout>
      <NextSeo
        title={undefined}
        description="Creating amazing solutions with code"
      />

      <Wrapper>
        <CenterGroup>
          <Title>IGOR N FAUSTINO</Title>
          <TypeWriterText>
            Hi, I'm Igor. I'm currently working as a Web Developer at Aftersale
          </TypeWriterText>
          <GetStarted whileHover={{ scale: 1.1 }} onClick={query.toggle}>
            Get started →
          </GetStarted>
        </CenterGroup>
      </Wrapper>
    </BaseLayout>
  );
};

export default Home;
