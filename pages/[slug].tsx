import { FC } from 'react';

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import styled from 'styled-components';

import CodeBlock from '../components/CodeBlock';
import HyperLink from '../components/HipperLink';
import { Title } from '../components/Title';
import BaseLayout from '../layouts/BaseLayout';
import { getAllPostsMetadata, getPostBySlug, PostMetadata } from '../lib/post';

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

	table,
	tr,
	td,
	th {
		border: 1px solid #555;
	}

	blockquote {
		padding: 0 1em;
		color: #6a737d;
		border-left: 0.25em solid #dfe2e5;
	}

	.youtube-video-container {
		position: relative;
		overflow: hidden;
		width: 100%;
	}

	.youtube-video-container::after {
		display: block;
		content: '';
		padding-top: 56.25%;
	}

	.youtube-video-container iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
`;

type Props = {
	metadata: PostMetadata;
	content: string;
};

const Post: NextPage<Props> = function (props) {
	const { content } = props;
	return (
		<BaseLayout>
			<Wrapper>
				<ReactMarkdown
					skipHtml={false}
					rehypePlugins={[rehypeRaw]}
					components={{
						code: CodeBlock,
						h1: Title as FC,
						a: HyperLink as FC,
					}}
				>
					{content}
				</ReactMarkdown>
			</Wrapper>
		</BaseLayout>
	);
};

type StaticPostProps = {
	slug: string;
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
	const { slug } = context.params as StaticPostProps;
	const { content, metadata } = getPostBySlug(slug);

	return {
		props: {
			content,
			metadata,
		},
	};
};

export const getStaticPaths: GetStaticPaths<StaticPostProps> = async () => {
	const paths = getAllPostsMetadata().map((post) => ({
		params: { slug: post.slug },
	}));

	return {
		paths,
		fallback: false,
	};
};

export default Post;
