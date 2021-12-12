import { GetStaticProps, NextPage } from 'next';
import styled from 'styled-components';

import ProjectItem from '../components/ProjectItem';
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
		width: 100vw;
	}
`;

type Props = {
	posts: PostMetadata[];
};

const projects = [
	{
		title: 'Teste',
		description: 'ola [Igor](www.google.com) tudo bem, eu sou um teste',
	},
];

const Projects: NextPage<Props> = function ({ posts }) {
	useSpotlightActions(posts);

	return (
		<BaseLayout>
			<Wrapper>
				<Title>Projects</Title>
				{projects.map(({ title, description }) => (
					<ProjectItem title={title} describe={description} key={title} />
				))}
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

export default Projects;
