import { NextSeo } from "next-seo";
import { parse } from "rss-to-json";
import styled from "styled-components";
import Markdown from "../components/atoms/Markdown";

import { Title } from "../components/atoms/Title";
import { PodcastList } from "../components/organisms/PodcastList";
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

type Props = {
  episodes: {
    title: string;
    description: string;
    link: string;
  }[];
};

const Podcast = function ({ episodes }: Props) {
  const [{ data }] = useGetPageByUrlQuery({ variables: { url: "podcast" } });

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

        <PodcastList episodes={episodes} />
      </Wrapper>
    </BaseLayout>
  );
};

const MINUTE = 60;

export const getStaticProps = async () => {
  const rss = await parse("https://anchor.fm/s/157bfc7c/podcast/rss", {});
  await client.query(GetPageByUrlDocument, { url: "podcast" }).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
      episodes: JSON.parse(JSON.stringify(rss.items, null, 3)),
    },
    revalidate: 30 * MINUTE,
  };
};

export default Podcast;
