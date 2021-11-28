import { FC } from 'react';

import styled from 'styled-components';

import SocialMediaInfo from '../components/SocialMediaInfo';

const Wrapper = styled.main`
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 100vh;
	flex-direction: column;
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
			<nav />
			<Main>{children}</Main>
			<Footer>
				<SocialMediaInfo />
			</Footer>
		</Wrapper>
	);
};

export default BaseLayout;
