import 'bootstrap/dist/css/bootstrap.css';
import 'styles/globals.scss';
import 'styles/tabs.scss';
import { useEffect } from 'react';
import Layout from 'components/layout/Layout';
import DrawerProvider from 'hooks/drawer';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);
  return (
    <DrawerProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DrawerProvider>
  );
}

export default MyApp;
