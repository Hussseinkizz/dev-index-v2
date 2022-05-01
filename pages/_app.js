import '../styles/globals.css';
import { StoreProvider } from '../store/store';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  );
}

export default MyApp;
