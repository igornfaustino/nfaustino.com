/* eslint-disable react/no-danger */

import hexToRgba from 'hex-to-rgba';
import styled from 'styled-components';

const Wrapper = styled.a`
	cursor: pointer;
	padding: 8px;
	border-radius: 3px;
	text-decoration: none;
	color: ${({ theme }) => theme.colors.textColor};
	transition: all 200ms;

	:hover {
		background-color: rgba(0, 0, 0, 0.2);
	}
`;

const Title = styled.h3`
	margin: 0;
`;

const Description = styled.p`
	margin: 0;
	color: ${({ theme }) => hexToRgba(theme.colors.textColor, 0.6)};
	text-overflow: ellipsis;
	overflow: hidden;
	display: -webkit-box !important;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	white-space: normal;
	font-size: 14px;

	a {
		color: ${({ theme }) => hexToRgba(theme.colors.textColor, 0.6)};
		font-weight: 600;
	}
`;

type Props = { title: string; description: string; link: string };

const PodcastItem = function ({ title, description, link }: Props) {
	return (
		<Wrapper target="_blank" href={link}>
			<Title>{title}</Title>
			<Description dangerouslySetInnerHTML={{ __html: description }} />
		</Wrapper>
	);
};

export default PodcastItem;
