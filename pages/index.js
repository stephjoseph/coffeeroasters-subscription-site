import Head from 'next/head';
import Header from '../components/home/Header';
import Main from '../components/home/Main';

const Home = () => {
  return (
    <>
      <Head>
        <title>Coffeeroasters | Home</title>
      </Head>
      <div
        id='home'
        className='flex w-full max-w-[1920px] flex-col items-center'
      >
        <Header />
        <Main />
      </div>
    </>
  );
};

export default Home;
