import hexToRgba from 'hex-to-rgba';
import styled from 'styled-components';

export const ItemDescription = styled.p`
	margin: 0;
	color: ${({ theme }) => hexToRgba(theme.colors.textColor, 0.9)};
	text-overflow: ellipsis;
	overflow: hidden;
	display: -webkit-box !important;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	white-space: normal;
	font-size: 14px;
	margin-top: 8px;

	a {
		color: ${({ theme }) => hexToRgba(theme.colors.textColor, 0.9)};
		font-weight: 600;
	}

	p {
		margin: 0;
	}
`;
