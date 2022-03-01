import { FC } from "react";

import styled from "styled-components";

import Header from "../src/components/molecules/Header";
import SocialMediaInfo from "../src/components/molecules/SocialMediaInfo";
import useSpotlightActions from "../hooks/useSpotlightActions";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
`;

const Nav = styled.nav`
  width: 100%;
`;

const Main = styled.main`
  height: 100%;
`;

const Footer = styled.footer`
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: center;
`;

const BaseLayout: FC = function ({ children }) {
  useSpotlightActions();

  return (
    <Wrapper>
      <Nav>
        <Header />
      </Nav>
      <Main>{children}</Main>
      <Footer>
        <SocialMediaInfo />
      </Footer>
    </Wrapper>
  );
};

export default BaseLayout;
