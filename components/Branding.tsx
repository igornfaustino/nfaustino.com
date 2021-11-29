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
`;

const Branding = function () {
	return (
		<Link href="/">
			<StyledLink>I</StyledLink>
		</Link>
	);
};

export default Branding;
