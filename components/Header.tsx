import Link from 'next/link';
import styled from 'styled-components';

import Branding from './Branding';

const Wrapper = styled.div`
	display: flex;
	padding: 16px 32px;
	width: 100%;
	justify-content: space-between;
	align-items: center;
`;

const MenuArea = styled.div`
	display: flex;
	gap: 32px;
`;

const MenuItem = styled.a`
	cursor: pointer;
`;

const Header = function () {
	return (
		<Wrapper>
			<Branding />
			<MenuArea>
				<Link href="/about">
					<MenuItem>About</MenuItem>
				</Link>
				<Link href="/blog">
					<MenuItem>Blog</MenuItem>
				</Link>
			</MenuArea>
		</Wrapper>
	);
};

export default Header;
