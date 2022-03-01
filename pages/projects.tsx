import { NextPage } from "next";
import styled from "styled-components";

import HyperLink from "../src/components/atoms/HipperLink";
import { Title } from "../src/components/atoms/Title";
import { ProjectList } from "../src/components/organisms/ProjectList";
import BaseLayout from "../layouts/BaseLayout";

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
  return (
    <BaseLayout>
      <Wrapper>
        <Title>Projects</Title>
        <p>
          In this page I shared some of my cool projects I worked since 2017.
          The most of this projects can be found in my{" "}
          <HyperLink href="https://github.com/igornfaustino" target="_blank">
            Github
          </HyperLink>
          . The projects are listed in a <b>desc</b> order
        </p>
        <hr style={{ width: "100%" }} />

        <ProjectList />
      </Wrapper>
    </BaseLayout>
  );
};

export default Projects;
