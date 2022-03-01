import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { useScreenSize } from 'react-size-hook';
import styled from 'styled-components';

import Branding from '../atoms/Branding';
import { MenuItem } from '../atoms/MenuItem';
import SpotlightButton from '../atoms/SpotlightButton';
import ThemeSwitcher from '../atoms/ThemeSwitcher';

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
						<Link href="/projects" passHref>
							<MenuItem active={router.pathname === '/projects'}>
								Projects
							</MenuItem>
						</Link>
						<Link href="/podcast" passHref>
							<MenuItem active={router.pathname === '/podcast'}>
								Podcast
							</MenuItem>
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
