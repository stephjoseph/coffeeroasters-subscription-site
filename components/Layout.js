import Head from 'next/head';
import Footer from './Footer';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel='icon'
          type='image/svg+xml'
          href='/assets/favicon-32x32.png'
        />
      </Head>
      <div className='grid place-items-center bg-light-cream'>
        <Nav />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
