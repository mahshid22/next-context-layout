import "../styles/globals.scss";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@/components/createEmotionCache";
import { AlertProvider } from "@/context/alertCotex";

import { Provider } from "@/context/resultContext";
import { FormProvider } from "@/context/formContex";
const clientSideEmotionCache = createEmotionCache();

export default function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <CacheProvider value={emotionCache}>
      <FormProvider>
        <Provider>
          <AlertProvider>
            <Component {...pageProps} />
          </AlertProvider>
        </Provider>
      </FormProvider>
    </CacheProvider>
  );
}
