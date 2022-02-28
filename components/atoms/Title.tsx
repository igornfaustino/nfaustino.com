import styled from 'styled-components';

export const Title = styled.h1`
	font-size: 40px;
	width: fit-content;
	color: ${({ theme }) => theme.colors.backgroundColor};
	background: ${({ theme }) => theme.colors.textColor};
	padding: 0 8px;
`;
