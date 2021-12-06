import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';

import Analytics from '../components/Analytics';
import Spotlight from '../components/Spotlight';
import CustomThemeProvider from '../contexts/CustomThemeProvider';
import { GlobalStyle } from '../styles/global';

const MyApp = function ({ Component, pageProps }: AppProps) {
	return (
		<CustomThemeProvider>
			<DefaultSeo
				openGraph={{
					type: 'website',
					url: 'https://nfaustino.com',
					site_name: 'Igor n Faustino',
				}}
				titleTemplate="%s | Igor n Faustino"
				defaultTitle="Igor n Faustino"
			/>
			<Spotlight>
				<GlobalStyle />
				<Component {...pageProps} />
				<Analytics />
			</Spotlight>
		</CustomThemeProvider>
	);
};

export default MyApp;
