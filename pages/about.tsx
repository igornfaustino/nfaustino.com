import type { NextPage } from 'next';
import Head from 'next/head';

import BaseLayout from '../layouts/BaseLayout';

const About: NextPage = function () {
	return (
		<BaseLayout>
			<Head>
				<title>About</title>
				<meta name="description" content="Generated by create next app" />
			</Head>
			about
		</BaseLayout>
	);
};

export default About;