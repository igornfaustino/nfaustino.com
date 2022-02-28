import { GetStaticProps, NextPage } from 'next';

import { Title } from '../components/atoms/Title';
import useSpotlightActions from '../hooks/useSpotlightActions';
import BaseLayout from '../layouts/BaseLayout';
import { getAllPostsMetadata, PostMetadata } from '../lib/post';

type Props = {
	posts: PostMetadata[];
};

const NotFound: NextPage<Props> = function ({ posts }) {
	useSpotlightActions(posts);
	return (
		<BaseLayout>
			<Title>404</Title>
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

export default NotFound;
