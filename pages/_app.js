import Layout from '../components/Layout';
import CoffeeProvider from '../context/CoffeeContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <CoffeeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CoffeeProvider>
  );
}

export default MyApp;
