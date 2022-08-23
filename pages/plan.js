import { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';

import Head from 'next/head';
import Modal from '../components/Modal';
import Header from '../components/plan/Header';
import Main from '../components/plan/Main';

const Create = () => {
  return (
    <>
      <Head>
        <title>Coffeeroasters | Plan</title>
      </Head>
      <div
        id='plan'
        className='relative flex w-full max-w-[1920px] flex-col items-center'
      >
        <Header />
        <Main />
        <Modal />
      </div>
    </>
  );
};

export default Create;
