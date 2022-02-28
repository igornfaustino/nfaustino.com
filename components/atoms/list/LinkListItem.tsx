import styled from 'styled-components';

export const LinkListItem = styled.a`
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
