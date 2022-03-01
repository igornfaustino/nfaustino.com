import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.div`
	width: 30px;
	height: 30px;
	cursor: pointer;
	margin: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.colors.textColor};
	color: ${({ theme }) => theme.colors.backgroundColor};
	font-size: 30px;
	font-weight: 700;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
`;

const Branding = function () {
	return (
		<Link href="/" passHref>
			<StyledLink>I</StyledLink>
		</Link>
	);
};

export default Branding;
