import styled from 'styled-components';

export const ListItem = styled.div`
	padding: 8px;
	border-radius: 3px;
	text-decoration: none;
	color: ${({ theme }) => theme.colors.textColor};
	transition: all 200ms;
`;
