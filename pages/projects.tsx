import { GetStaticProps, NextPage } from 'next';
import styled from 'styled-components';

import HyperLink from '../components/HipperLink';
import ProjectItem from '../components/ProjectItem';
import { Title } from '../components/Title';
import { projects } from '../data/projects';
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

const List = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
	margin-bottom: 16px;
`;

type Props = {
	posts: PostMetadata[];
};

const Projects: NextPage<Props> = function ({ posts }) {
	useSpotlightActions(posts);

	return (
		<BaseLayout>
			<Wrapper>
				<Title>Projects</Title>
				<p>
					In this page I shared some of my cool projects I worked since 2017.
					The most of this projects can be found in my{' '}
					<HyperLink href="https://github.com/igornfaustino" target="_blank">
						Github
					</HyperLink>
					. The projects are listed in a <b>desc</b> order
				</p>
				<hr style={{ width: '100%' }} />
				<List>
					{projects.map(({ title, description }) => (
						<ProjectItem title={title} describe={description} key={title} />
					))}
				</List>
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
