import type { AppProps } from 'next/app';

import Analytics from '../components/Analytics';
import Spotlight from '../components/Spotlight';
import CustomThemeProvider from '../contexts/CustomThemeProvider';
import { GlobalStyle } from '../styles/global';

const MyApp = function ({ Component, pageProps }: AppProps) {
	return (
		<CustomThemeProvider>
			<Spotlight>
				<GlobalStyle />
				<Component {...pageProps} />
				<Analytics />
			</Spotlight>
		</CustomThemeProvider>
	);
};

export default MyApp;
