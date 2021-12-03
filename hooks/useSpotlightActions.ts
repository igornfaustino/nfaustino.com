import { Action, useRegisterActions } from 'kbar';
import { useRouter } from 'next/dist/client/router';

import { PostMetadata } from '../lib/post';
import useTheme from './useTheme';

const useSpotlightActions = (metadatas: PostMetadata[] = []) => {
	const router = useRouter();
	const { setTheme } = useTheme();

	const pages = [
		{
			id: 'home',
			name: 'Home',
			shortcut: ['h'],
			keywords: 'igor faustino',
			section: 'Pages',
			perform: () => router.push('/'),
		},
		{
			id: 'about',
			name: 'About Me',
			shortcut: ['a'],
			keywords: 'about information',
			section: 'Pages',
			perform: () => router.push('/about'),
		},
		{
			id: 'blog',
			name: 'Blog',
			shortcut: ['b'],
			keywords: 'writing words',
			section: 'Pages',
			perform: () => router.push('/blog'),
		},
	];

	const socialMedia = [
		{
			id: 'linkedin',
			name: 'Linkedin',
			shortcut: ['l'],
			keywords: 'linkedin',
			section: 'Follow me',
			perform: () =>
				window.open('https://www.linkedin.com/in/igornfaustino', '_blank'),
		},
		{
			id: 'github',
			name: 'Github',
			shortcut: ['a'],
			keywords: 'github',
			section: 'Follow me',
			perform: () => window.open('https://github.com/igornfaustino', '_blank'),
		},
		{
			id: 'twitter',
			name: 'Twitter',
			shortcut: ['t'],
			keywords: 'twitter',
			section: 'Follow me',
			perform: () => window.open('https://twitter.com/igornfaustino', '_blank'),
		},
		{
			id: 'youtube',
			name: 'Youtube',
			shortcut: ['y'],
			keywords: 'youtube',
			section: 'Follow me',
			perform: () =>
				window.open(
					'https://www.youtube.com/channel/UCIOtxH-8UsIX8J7iHZ8px5w',
					'_blank'
				),
		},
	];

	const posts = [
		{
			id: 'posts',
			name: 'Search blog post...',
			keywords: 'posts blog',
			section: 'Posts',
		},
		...metadatas.map(({ title, description, slug }) => ({
			id: slug,
			name: title,
			keywords: description,
			parent: 'posts',
			perform: () => router.push(`/${slug}`),
		})),
	];

	const preferences = [
		{
			id: 'change theme',
			name: 'Change theme...',
			keywords: 'theme',
			section: 'preferences',
		},
		{
			id: 'Dark theme',
			name: 'Dark',
			parent: 'change theme',
			keywords: 'dark theme',
			perform: () => setTheme('dark'),
		},
		{
			id: 'light theme',
			name: 'Light',
			parent: 'change theme',
			keywords: 'dark theme',
			perform: () => setTheme('light'),
		},
	];

	const actions: Action[] = [
		...pages,
		...posts,
		...socialMedia,
		...preferences,
	];

	useRegisterActions(actions);
};

export default useSpotlightActions;
