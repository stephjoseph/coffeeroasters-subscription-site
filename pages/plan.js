import Head from 'next/head';
import Header from '../components/plan/Header';
import Main from '../components/plan/Main';

const Create = () => {
  return (
    <>
      <Head>
        <title>Coffeeroasters | Plan</title>
      </Head>
      <div id='plan' className='flex flex-col items-center w-full'>
        <Header />
        <Main />
      </div>
    </>
  );
};

export default Create;
