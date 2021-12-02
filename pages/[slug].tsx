import { FC } from 'react';

import { format, parseISO } from 'date-fns';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import styled from 'styled-components';

import CenteredImage from '../components/CenteredImage';
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

	p {
		width: 100%;
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

const StyledTitle = styled(Title)`
	margin-top: 8px;
	margin-bottom: 8px;
`;

const Description = styled.p`
	margin: 0;
	opacity: 0.6;
	font-size: 14px;
	margin-bottom: 32px;
	text-align: left;
	width: 100%;
`;

const DateTime = styled.span`
	font-size: 14px;
	margin-top: 16px;
`;

const StyledHyperLink = styled(HyperLink)`
	font-size: 14px;
`;

type Props = {
	metadata: PostMetadata;
	content: string;
};

const Post: NextPage<Props> = function (props) {
	const { content, metadata } = props;

	const formattedDate = format(parseISO(metadata.date), 'LLL dd, yyyy');

	return (
		<BaseLayout>
			<Head>
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
			</Head>
			<Wrapper>
				<Link href="/blog" passHref>
					<StyledHyperLink>← Back</StyledHyperLink>
				</Link>
				<DateTime>
					{formattedDate} · {metadata.readingTime} min read
				</DateTime>
				<StyledTitle>{metadata.title}</StyledTitle>
				<Description>{metadata.description}</Description>

				<ReactMarkdown
					skipHtml={false}
					rehypePlugins={[rehypeRaw]}
					components={{
						code: CodeBlock,
						h1: Title as FC,
						a: HyperLink as FC,
						img: CenteredImage,
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
