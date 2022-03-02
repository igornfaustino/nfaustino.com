import { FC } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import styled from "styled-components";
import CenteredImage from "../molecules/CenteredImage";
import CodeBlock from "./CodeBlock";
import HyperLink from "./HipperLink";
import { Title } from "./Title";

const StyledMarkdown = styled(ReactMarkdown)`
  display: flex;
  width: 100%;
  flex-direction: column;

  p {
    text-align: justify;
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

const Markdown = ({ content }: { content?: string | null }) => {
  return (
    <StyledMarkdown
      skipHtml={false}
      rehypePlugins={[rehypeRaw]}
      components={{
        code: CodeBlock,
        h1: Title as FC,
        a: HyperLink as FC,
        img: CenteredImage,
      }}
    >
      {content || ""}
    </StyledMarkdown>
  );
};

export default Markdown;
