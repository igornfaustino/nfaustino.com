import type { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import styled from 'styled-components';

import CareerList from '../components/CareerList';
import EducationList from '../components/EducationList';
import HyperLink from '../components/HipperLink';
import { Title } from '../components/Title';
import useSpotlightActions from '../hooks/useSpotlightActions';
import BaseLayout from '../layouts/BaseLayout';
import { getAllPostsMetadata, PostMetadata } from '../lib/post';

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
	posts: PostMetadata[];
};

const About: NextPage<Props> = function ({ posts }) {
	useSpotlightActions(posts);

	return (
		<BaseLayout>
			<NextSeo
				title="About"
				description="Hi, my name is Igor. I've been addicted with the software engineering
				since 2016, when I first join the university coursing a computer
				science degree."
			/>

			<Wrapper>
				<Title>About Me</Title>
				<p>
					Hi, my name is Igor. I've been addicted to software engineering since
					2016 when I first joined the university coursing a computer science
					degree.
				</p>
				<p>
					I'm currently working as a web developer at{' '}
					<HyperLink href="https://after.sale" target="_blank" rel="noreferrer">
						Aftersale
					</HyperLink>{' '}
					where I help build solutions that can impact thousands of people.
				</p>
				<p>
					I'm living in Brazil and when I'm not working I'll probably be playing
					games, reading books or going for a run.
				</p>

				<hr style={{ width: '100%' }} />

				<h2>Career</h2>

				<CareerList />

				<hr style={{ width: '100%' }} />

				<h2>Education</h2>

				<EducationList />
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

export default About;
