import { AdaptUIProvider, SlotIcon } from "@adaptui/react-tailwind";

import "../styles/index.css";
import theme from "../adaptui.config";

function MyApp({ Component, pageProps }) {
  return (
    <AdaptUIProvider extend={theme}>
      <Component {...pageProps} />
    </AdaptUIProvider>
  );
}

export default MyApp;
