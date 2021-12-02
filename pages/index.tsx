import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

import { Title } from '../components/Title';
import TypeWriterText from '../components/TypeWriterText';
import BaseLayout from '../layouts/BaseLayout';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 500px;
	padding: 8px;

	@media (max-width: 500px) {
		width: 100vw;
	}
`;

const CenterGroup = styled.div`
	width: 100%;
`;

const Home: NextPage = function () {
	return (
		<BaseLayout>
			<Head>
				<title>Igor Faustino</title>
				<meta
					name="description"
					content="Creating amazing solutions with code"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Wrapper>
				<CenterGroup>
					<Title>IGOR N FAUSTINO</Title>
					<TypeWriterText>
						Hi, I'am Igor and currently I'am working as a Web Developer at
						aftersale
					</TypeWriterText>
				</CenterGroup>
			</Wrapper>
		</BaseLayout>
	);
};

export default Home;
