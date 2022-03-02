import { FC } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import CenteredImage from "../molecules/CenteredImage";
import CodeBlock from "./CodeBlock";
import HyperLink from "./HipperLink";
import { Title } from "./Title";

const Markdown = ({ content }: { content?: string | null }) => {
  return (
    <ReactMarkdown
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
    </ReactMarkdown>
  );
};

export default Markdown;
