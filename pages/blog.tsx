import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

import PostItem from '../components/PostItem';
import { Title } from '../components/Title';
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

const Blog: NextPage<Props> = function ({ posts }) {
	const description = `Here you will be able to find all post I wrote. You can find posts
	about development, productivity and everything that is in my mind. The
	posts are in both portuguese and english. Hope you like :)`;

	return (
		<BaseLayout>
			<Head>
				<title>Blog</title>
				<meta name="description" content={description} />
			</Head>
			<Wrapper>
				<Title>Personal Blog</Title>

				<p>{description}</p>

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
