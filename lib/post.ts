import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

import matter from 'gray-matter';

const POST_FOLDER = join(process.cwd(), 'posts');

export type PostMetadata = {
	title: string;
	slug: string;
	date: string;
	description: string;
	tags?: string;
};

type MatterMetadata = Omit<PostMetadata, 'date'> & {
	date: Date;
};

export const readPost = (postFile: string) => {
	const path = join(POST_FOLDER, postFile);
	const post = readFileSync(path);
	const { data, content } = matter(post);

	return {
		metadata: data as MatterMetadata,
		content,
	};
};

export const getAllPostsMetadata = (): PostMetadata[] => {
	const files = readdirSync(POST_FOLDER);
	const postsMetadata = files.map((file) => readPost(file).metadata);

	return postsMetadata
		.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
		.map((post) => ({
			...post,
			date: post.date.toISOString(),
		}));
};
