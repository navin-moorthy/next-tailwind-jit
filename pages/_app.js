import { RenderlesskitProvider } from '@renderlesskit/react-tailwind';

import '../styles/index.css';
import theme from '../renderlesskit.config';

function MyApp({ Component, pageProps }) {
  return (
    <RenderlesskitProvider extend={theme}>
      <Component {...pageProps} />
    </RenderlesskitProvider>
  );
}

export default MyApp;
