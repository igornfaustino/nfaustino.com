import { parse } from "rss-to-json";
import styled from "styled-components";

import { Title } from "../components/atoms/Title";
import { PodcastList } from "../components/organisms/PodcastList";
import BaseLayout from "../layouts/BaseLayout";

const HOUR = 60 * 60;

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
  return (
    <BaseLayout>
      <Wrapper>
        <Title>Podcast</Title>
        <p>
          Here you will be able to find all episodes of my podcast. The episodes
          are about programming and productivity. Me and a friend uses this
          podcast to share knowledge with others. (All the episodes are in
          Portuguese )
        </p>
        <hr style={{ width: "100%" }} />

        <PodcastList episodes={episodes} />
      </Wrapper>
    </BaseLayout>
  );
};

export const getStaticProps = async () => {
  const rss = await parse("https://anchor.fm/s/157bfc7c/podcast/rss", {});

  return {
    props: {
      episodes: JSON.parse(JSON.stringify(rss.items, null, 3)),
    },
    revalidate: 6 * HOUR,
  };
};

export default Podcast;
