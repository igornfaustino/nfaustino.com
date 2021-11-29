import { FC } from 'react';

import styled from 'styled-components';

import Header from '../components/Header';
import SocialMediaInfo from '../components/SocialMediaInfo';

const Wrapper = styled.main`
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 100vh;
	flex-direction: column;
`;

const Nav = styled.nav`
	width: 100%;
`;

const Main = styled.main`
	height: 100%;
`;

const Footer = styled.footer`
	width: 100%;
	padding: 16px;
	display: flex;
	justify-content: center;
`;

const BaseLayout: FC = function ({ children }) {
	return (
		<Wrapper>
			<Nav>
				<Header />
			</Nav>
			<Main>{children}</Main>
			<Footer>
				<SocialMediaInfo />
			</Footer>
		</Wrapper>
	);
};

export default BaseLayout;
