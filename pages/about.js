import Head from 'next/head';
import Header from '../components/about/Header';
import Main from '../components/about/Main';

const About = () => {
  return (
    <>
      <Head>
        <title>Coffeeroasters | About Us</title>
      </Head>
      <div
        id='about'
        className='flex w-full max-w-[1920px] flex-col items-center'
      >
        <Header />
        <Main />
      </div>
    </>
  );
};

export default About;
