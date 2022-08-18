import Head from 'next/head';
import Header from '../components/about/Header';
import Main from '../components/about/Main';

const About = () => {
  return (
    <>
      <Head>
        <title>Coffeeroasters | About Us</title>
      </Head>
      <div id='about' className='flex flex-col items-center w-full'>
        <Header />
        <Main />
      </div>
    </>
  );
};

export default About;
