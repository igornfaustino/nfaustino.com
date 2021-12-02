import type { AppProps } from 'next/app';

import Analytics from '../components/Analytics';
import CustomThemeProvider from '../contexts/CustomThemeProvider';
import { GlobalStyle } from '../styles/global';

const MyApp = function ({ Component, pageProps }: AppProps) {
	return (
		<CustomThemeProvider>
			<GlobalStyle />
			<Component {...pageProps} />
			<Analytics />
		</CustomThemeProvider>
	);
};

export default MyApp;
