import styled from 'styled-components';

export const MenuItem = styled.a<{ active: boolean }>`
	cursor: pointer;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	color: ${({ theme }) => theme.colors.textColor};
	text-decoration: none;

	${({ active, theme }) =>
		active && `border-bottom: 1px solid ${theme.colors.textColor};`}
`;
