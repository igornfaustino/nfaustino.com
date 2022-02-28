import { motion } from 'framer-motion';
import { useKBar } from 'kbar';
import type { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import styled from 'styled-components';

import { Title } from '../components/Title';
import TypeWriterText from '../components/TypeWriterText';
import useSpotlightActions from '../hooks/useSpotlightActions';
import BaseLayout from '../layouts/BaseLayout';
import { getAllPostsMetadata, PostMetadata } from '../lib/post';

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

type Props = {
	posts: PostMetadata[];
};

const Home: NextPage<Props> = function ({ posts }) {
	const { query } = useKBar();
	useSpotlightActions(posts);

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

export const getStaticProps: GetStaticProps<Props> = async () => {
	const posts = await getAllPostsMetadata();

	return {
		props: {
			posts,
		},
	};
};

export default Home;
