import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { useScreenSize } from 'react-size-hook';
import styled from 'styled-components';

import Branding from './Branding';
import SpotlightButton from './SpotlightButton';
import ThemeSwitcher from './ThemeSwitcher';

const Wrapper = styled.div`
	display: flex;
	padding: 16px 16px;
	width: 100%;
	justify-content: space-between;
	align-items: center;
`;

const MenuArea = styled.div`
	display: flex;
	gap: 32px;
	align-items: center;
`;

const MenuItem = styled.a<{ active: boolean }>`
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

const Header = function () {
	const router = useRouter();
	const { isTablet } = useScreenSize();

	return (
		<Wrapper>
			<Branding />
			<MenuArea>
				{isTablet && (
					<>
						<Link href="/about" passHref>
							<MenuItem active={router.pathname === '/about'}>About</MenuItem>
						</Link>
						<Link href="/blog" passHref>
							<MenuItem active={router.pathname === '/blog'}>Blog</MenuItem>
						</Link>
					</>
				)}
				<SpotlightButton />
				<ThemeSwitcher />
			</MenuArea>
		</Wrapper>
	);
};

export default Header;
