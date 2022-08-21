import { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';

import Head from 'next/head';
import Modal from '../components/Modal';
import Header from '../components/plan/Header';
import Main from '../components/plan/Main';

const Create = () => {
  const [isModalOpen, setIsModalOpen] = useContext(ModalContext);

  return (
    <>
      <Head>
        <title>Coffeeroasters | Plan</title>
      </Head>
      <div id='plan' className='flex flex-col items-center w-full relative'>
        <Header />
        <Main />
        {isModalOpen && <Modal />}
      </div>
    </>
  );
};

export default Create;
