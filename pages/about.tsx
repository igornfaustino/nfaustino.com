import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

import CareerList from '../components/CareerList';
import EducationList from '../components/EducationList';
import HipperLink from '../components/HipperLink';
import { Title } from '../components/Title';
import BaseLayout from '../layouts/BaseLayout';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 700px;
	padding: 8px;
	flex-direction: column;
	margin-bottom: 64px;

	@media (max-width: 700px) {
		width: 100vw;
	}
`;

const About: NextPage = function () {
	return (
		<BaseLayout>
			<Head>
				<title>About</title>
				<meta name="description" content="Generated by create next app" />
			</Head>
			<Wrapper>
				<Title>About Me</Title>
				<p>
					Hi, my name is Igor. I've been addicted with the software engineering
					since 2016, when I first join the university coursing a computer
					science degree.
				</p>
				<p>
					I'm currently working as web developer at{' '}
					<HipperLink
						href="https://after.sale"
						target="_blank"
						rel="noreferrer"
					>
						aftersale
					</HipperLink>{' '}
					where I help build solutions tha can impact thousands of people.
				</p>
				<p>
					I'm living in Brazil and when I'm not working I'll probably be playing
					games, reading books or going for a run.
				</p>

				<hr style={{ width: '100%' }} />

				<h2>Career</h2>

				<CareerList />

				<hr style={{ width: '100%' }} />

				<h2>Education</h2>

				<EducationList />
			</Wrapper>
		</BaseLayout>
	);
};

export default About;
