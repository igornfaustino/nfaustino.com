import { useCallback, useMemo } from 'react';
import { useRegisterActions } from 'kbar';
import { useRouter } from 'next/dist/client/router';
import { useAllPostsQuery } from '../generated/graphql';
import useTheme from './useTheme';
import { generatePagesActions } from '../../lib/spotlight/pages';
import { generateSocialMediaActions } from '../../lib/spotlight/socialMedia';
import { generatePreferenceActions } from '../../lib/spotlight/preferences';
import { generatePostActions } from '../../lib/spotlight/posts';

const useSpotlightActions = () => {
	const router = useRouter();
	const { setTheme } = useTheme();
	const [{ data }] = useAllPostsQuery()

	const redirect = useCallback((path: string) => () => router.push(path), [router])
	const changeTheme = useCallback((theme: 'light' | 'dark') => () => setTheme(theme), [setTheme])

	const actions = useMemo(() => {
		if (!data?.posts) return []

		return ([
			...generatePagesActions(redirect),
			...generatePostActions(data.posts, redirect),
			...generateSocialMediaActions(),
			...generatePreferenceActions(changeTheme)
		])
	}, [changeTheme, data, redirect])

	useRegisterActions(actions, [actions])
};

export default useSpotlightActions;
