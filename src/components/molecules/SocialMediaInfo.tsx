import { motion } from "framer-motion";
import {
  FaCode,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";
import { useScreenSize } from "react-size-hook";
import styled from "styled-components";

import * as gtag from "../../../lib/gtag";

const Wrapper = styled.div`
  display: flex;
  gap: 32px;
`;

const Links = styled(motion.a)`
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textColor};

  padding-bottom: 4px;
  border-bottom: 1px solid transparent;

  display: flex;
  align-items: center;
  gap: 8px;

  :hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.textColor};
  }
`;

const hoverAnimation = {
  scale: 1.1,
};

const SocialMediaInfo = function () {
  const { isDesktop } = useScreenSize();

  const logClick = (socialMediaName: string) => () => {
    gtag.event({
      action: "socialMedia",
      label: "Click on social media item",
      category: "CTA",
      value: socialMediaName,
    });
  };

  return (
    <Wrapper>
      <Links
        whileHover={hoverAnimation}
        href="https://github.com/igornfaustino/nfaustino.com"
        target="_blank"
        onClick={logClick("source")}
      >
        {isDesktop && "Source"}
        <FaCode />
      </Links>
      <Links
        whileHover={hoverAnimation}
        href="https://www.linkedin.com/in/igornfaustino"
        target="_blank"
        onClick={logClick("linkedin")}
      >
        {isDesktop && "Linkedin"}
        <FaLinkedin />
      </Links>
      <Links
        whileHover={hoverAnimation}
        href="https://github.com/igornfaustino"
        target="_blank"
        onClick={logClick("github")}
      >
        {isDesktop && "GitHub"}
        <FaGithub />
      </Links>
      <Links
        whileHover={hoverAnimation}
        href="https://twitter.com/igornfaustino"
        target="_blank"
        onClick={logClick("twitter")}
      >
        {isDesktop && "Twitter"}
        <FaTwitter />
      </Links>
      <Links
        whileHover={hoverAnimation}
        href="https://www.youtube.com/channel/UCIOtxH-8UsIX8J7iHZ8px5w"
        target="_blank"
        onClick={logClick("youtube")}
      >
        {isDesktop && "Youtube"}
        <FaYoutube />
      </Links>
    </Wrapper>
  );
};

export default SocialMediaInfo;
