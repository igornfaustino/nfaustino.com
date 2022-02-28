import { FC } from 'react';

import hexToRgba from 'hex-to-rgba';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import styled from 'styled-components';

import HyperLink from '../atoms/HipperLink';
import { ItemDescription } from '../atoms/list/ItemDescription';
import { ItemTitle } from '../atoms/list/ItemTitle';
import { ListItem } from '../atoms/list/ListItem';

const DescriptionHyperLink = styled(HyperLink)`
	color: ${({ theme }) => hexToRgba(theme.colors.textColor, 0.8)};
`;

type Props = {
	title: string;
	describe: string;
};

const ProjectItem: FC<Props> = function ({ title, describe }) {
	return (
		<ListItem>
			<ItemTitle>{title}</ItemTitle>
			<ReactMarkdown
				skipHtml={false}
				rehypePlugins={[rehypeRaw]}
				components={{ a: DescriptionHyperLink as FC, p: ItemDescription as FC }}
			>
				{describe}
			</ReactMarkdown>
		</ListItem>
	);
};

export default ProjectItem;
