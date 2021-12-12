import { FC } from 'react';

import hexToRgba from 'hex-to-rgba';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import HyperLink from './HipperLink';

const Title = styled.h3`
	margin: 4px 0;
	font-size: 16px;
`;

const Text = styled.p`
	margin: 0;
	color: ${({ theme }) => hexToRgba(theme.colors.textColor, 0.8)};
`;

const DescriptionHyperLink = styled(HyperLink)`
	color: ${({ theme }) => hexToRgba(theme.colors.textColor, 0.8)};
`;

type Props = {
	title: string;
	describe: string;
};

const ProjectItem: FC<Props> = function ({ title, describe }) {
	return (
		<div>
			<Title>{title}</Title>
			<ReactMarkdown
				components={{ a: DescriptionHyperLink as FC, p: Text as FC }}
			>
				{describe}
			</ReactMarkdown>
		</div>
	);
};

export default ProjectItem;
