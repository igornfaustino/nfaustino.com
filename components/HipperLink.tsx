import styled from 'styled-components';

const HyperLink = styled.a`
	color: ${({ theme }) => theme.colors.textColor};
	font-weight: 600;
`;

export default HyperLink;
