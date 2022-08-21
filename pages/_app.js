import Layout from '../components/Layout';
import CoffeeProvider from '../context/CoffeeContext';
import ModalProvider from '../context/ModalContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <CoffeeProvider>
      <ModalProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ModalProvider>
    </CoffeeProvider>
  );
}

export default MyApp;
