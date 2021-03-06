import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { Provider } from "urql";

import Analytics from "../components/atoms/Analytics";
import Spotlight from "../components/atoms/Spotlight";
import CustomThemeProvider from "../contexts/CustomThemeProvider";
import { client, ssrCache } from "../lib/urql";
import { GlobalStyle } from "../styles/global";

const MyApp = function ({ Component, pageProps }: AppProps) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }

  return (
    <Provider value={client}>
      <CustomThemeProvider>
        <DefaultSeo
          openGraph={{
            type: "website",
            url: "https://nfaustino.com",
            site_name: "Igor n Faustino",
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
    </Provider>
  );
};

export default MyApp;
