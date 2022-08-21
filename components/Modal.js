import { useContext, useEffect, useState } from 'react';
import { CoffeeContext } from '../context/CoffeeContext';
import { ModalContext } from '../context/ModalContext';

const Modal = () => {
  const [state] = useContext(CoffeeContext);
  const [isModalOpen, setIsModalOpen, price, setPrice] =
    useContext(ModalContext);

  function handleCheckout() {
    setIsModalOpen(false);
  }

  function computePricePerMonth() {
    switch (state.deliveries) {
      case 'Every week':
        setPricePerMonth((price * 4).toFixed(2));
        break;
      case 'Every 2 weeks':
        setPricePerMonth((price * 2).toFixed(2));
        break;
      case 'Every month':
        setPricePerMonth(price.toFixed(2));
        break;
      default:
        setPricePerMonth((0).toFixed(2));
    }
  }

  const [pricePerMonth, setPricePerMonth] = useState('0.00');

  useEffect(() => {
    console.log(price);
    const closeModal = (e) => {
      if (e.keyCode === 27) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', closeModal);
    return () => window.removeEventListener('keydown', closeModal);
  }, []);

  useEffect(() => {
    computePricePerMonth();
  }, [price]);

  return (
    <div
      className='fixed h-screen bg-black/50 w-full top-0 flex flex-col items-center z-50'
      onClick={() => setIsModalOpen(false)}
    >
      <div
        className='w-[87.2%] flex flex-col items-center bg-white mt-9 rounded-lg'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='bg-dark-grey-blue w-full rounded-t-lg'>
          <h2 className='px-6 py-[1.75rem] w-full font-h2 text-[1.75rem] leading-[2rem] text-white'>
            Order Summary
          </h2>
        </div>
        <div className='flex items-center w-full flex-col pt-10 px-6 pb-6 gap-6'>
          <div className='flex flex-col items-center w-full'>
            <p className='font-h2 text-[1.5rem] leading-10 text-grey'>
              “I drink my coffee as{' '}
              <span className='text-dark-cyan'>{state.preferences}</span>, with
              a <span className='text-dark-cyan'>{state.bean}</span> type of
              bean. <span className='text-dark-cyan'>{state.quantity}</span>{' '}
              {state.preferences !== 'Capsule' && (
                <>
                  ground ala{' '}
                  <span className='text-dark-cyan'>{state.grind}</span>
                </>
              )}
              , sent to me{' '}
              <span className='text-dark-cyan'>{state.deliveries}</span>
              .”
            </p>
            <p className='font-body text-[0.938rem] leading-[1.563rem] text-dark-grey-blue/80'>
              Is this correct? You can proceed to checkout or go back to plan
              selection if something is off. Subscription discount codes can
              also be redeemed at the checkout.{' '}
            </p>
          </div>
          <div className='w-full'>
            <button
              type='button'
              className='btn w-full'
              onClick={handleCheckout}
            >
              Checkout - ${pricePerMonth} / mo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
