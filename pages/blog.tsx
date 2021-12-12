import type { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import styled from 'styled-components';

import PostItem from '../components/PostItem';
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

const Blog: NextPage<Props> = function ({ posts }) {
	const pageDescription = `Here you will be able to find all posts I wrote. 
	You can find posts about development, productivity, and everything that's in my mind. 
	Posts are in both Portuguese and English. Hope you like :)`;

	useSpotlightActions(posts);

	return (
		<BaseLayout>
			<NextSeo title="Blog" description={pageDescription} />

			<Wrapper>
				<Title>Personal Blog</Title>

				<p>{pageDescription}</p>

				<hr style={{ width: '100%' }} />

				{posts.map((post) => (
					<PostItem key={post.slug} post={post} />
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

export default Blog;
