import type { AppProps } from 'next/app';

import CustomThemeProvider from '../contexts/CustomThemeProvider';
import { GlobalStyle } from '../styles/global';

const MyApp = function ({ Component, pageProps }: AppProps) {
	return (
		<CustomThemeProvider>
			<GlobalStyle />
			<Component {...pageProps} />
		</CustomThemeProvider>
	);
};

export default MyApp;
