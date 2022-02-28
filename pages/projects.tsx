import { GetStaticProps, NextPage } from 'next';
import styled from 'styled-components';

import HyperLink from '../components/atoms/HipperLink';
import { Title } from '../components/atoms/Title';
import { ProjectList } from '../components/organisms/ProjectList';
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

				<ProjectList />
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
