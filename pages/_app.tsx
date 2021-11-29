import type { AppProps } from 'next/app';
import Head from 'next/head';

import CustomThemeProvider from '../contexts/CustomThemeProvider';
import { GlobalStyle } from '../styles/global';

const MyApp = function ({ Component, pageProps }: AppProps) {
	return (
		<CustomThemeProvider>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin=""
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<GlobalStyle />
			<Component {...pageProps} />
		</CustomThemeProvider>
	);
};

export default MyApp;
