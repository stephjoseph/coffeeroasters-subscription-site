import Head from 'next/head';
import Header from '../components/home/Header';
import Main from '../components/home/Main';

const Home = () => {
  return (
    <>
      <Head>
        <title>Coffeeroasters | Home</title>
      </Head>
      <div id='home' className='flex flex-col items-center w-full'>
        <Header />
        <Main />
      </div>
    </>
  );
};

export default Home;
