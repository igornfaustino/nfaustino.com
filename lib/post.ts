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
	readingTime: number;
};

type MatterMetadata = Omit<PostMetadata, 'date'> & {
	date: Date;
};

export const getPostReadingTime = (content: string) => {
	const wpm = 225;
	const words = content.trim().split(/\s+/).length;
	const time = Math.ceil(words / wpm);

	return time;
};

export const readPost = (postFile: string) => {
	const path = join(POST_FOLDER, postFile);
	const post = readFileSync(path);
	const { data, content } = matter(post);

	const slug = postFile.replace('.md', '');
	const metadata: MatterMetadata = {
		...(data as Omit<MatterMetadata, 'slug'>),
		slug,
		readingTime: getPostReadingTime(content),
	};

	return {
		metadata,
		content,
	};
};

export const getPostBySlug = (slug: string) => {
	const { content, metadata } = readPost(`${slug}.md`);

	return {
		content,
		metadata: {
			...metadata,
			date: metadata.date.toISOString(),
		},
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
