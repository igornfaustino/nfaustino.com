/* eslint-disable indent */
import { FC } from 'react';

import {
	KBarProvider,
	KBarPortal,
	KBarPositioner,
	KBarAnimator,
	KBarSearch,
	useMatches,
	KBarResults,
} from 'kbar';
import styled from 'styled-components';

const StyledKBarPositioner = styled(KBarPositioner)`
	background: rgba(0, 0, 0, 0.7);
	transition: all 2000ms;
`;

const StyledKBarSearch = styled(KBarSearch)`
	padding: 12px 16px;
	font-size: 16px;
	width: 100%;
	box-sizing: border-box;
	outline: none;
	border: none;
	margin: 0;
	font-family: Fira Code, monospace;
	background: ${({ theme }) => theme.colors.spotlightColor};
	color: ${({ theme }) => theme.colors.textColor};
`;

const StyledKBarAnimator = styled(KBarAnimator)`
	max-width: 600px;
	width: 100%;
	border-radius: 8px;
	overflow: hidden;
	box-shadow: 0px 5px 15px ${({ theme }) => theme.colors.shadowColor};
	font-family: Fira Code, monospace;
	background: ${({ theme }) => theme.colors.spotlightColor};

	* {
		scrollbar-width: thin;
		scrollbar-color: ${({ theme: { colors } }) =>
			`${colors.textColor} ${colors.spotlightColor}`};
	}

	/* Works on Chrome, Edge, and Safari */
	*::-webkit-scrollbar {
		width: 12px;
	}

	*::-webkit-scrollbar-track {
		background: ${({ theme }) => theme.colors.spotlightColor};
	}

	*::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.colors.textColor};
		border-radius: 20px;
		border: 3px solid ${({ theme }) => theme.colors.spotlightColor};
	}
`;

const Section = styled.div`
	padding: 8px;
	opacity: 0.5;
	font-size: 12px;
	text-transform: uppercase;
`;

const Item = styled.div<{ active: boolean }>`
	padding: 16px;
	cursor: pointer;
	border-left: ${({ active, theme }) =>
		active && `3px solid ${theme.colors.textColor}`};
	background: ${({ active, theme }) =>
		active && theme.colors.spotlightSelectionColor};
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
`;

type ItemProps = {
	active: boolean;
	item:
		| string
		| {
				name: string;
		  };
};

const ResultItem = function ({ item, active }: ItemProps) {
	if (typeof item === 'string') return <Section>{item}</Section>;
	return <Item active={active}>{item.name}</Item>;
};

const RenderResults = function () {
	const { results } = useMatches();

	return <KBarResults items={results} onRender={ResultItem} />;
};

const Spotlight: FC = function ({ children }) {
	return (
		<KBarProvider
			actions={[]}
			options={{
				enableHistory: true,
			}}
		>
			<KBarPortal>
				<StyledKBarPositioner>
					<StyledKBarAnimator>
						<StyledKBarSearch />
						<RenderResults />
					</StyledKBarAnimator>
				</StyledKBarPositioner>
			</KBarPortal>
			{children}
		</KBarProvider>
	);
};

export default Spotlight;
