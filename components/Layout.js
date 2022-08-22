import { useState, useEffect } from 'react';
import Head from 'next/head';
import Footer from './Footer';
import MobileNav from './MobileNav';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const [width, setWidth] = useState(0);

  const updateSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    window.onresize = updateSize;
  }, []);

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
        {width >= 768 && <Navbar />}
        {width < 768 && <MobileNav />}
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
