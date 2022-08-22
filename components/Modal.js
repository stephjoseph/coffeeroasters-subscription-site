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
      className='fixed top-0 z-50 flex h-screen w-full flex-col items-center bg-black/50'
      onClick={() => setIsModalOpen(false)}
    >
      <div
        className='mt-9 flex w-[87.2%] flex-col items-center rounded-lg bg-white md:mt-[13.375rem] md:w-[70.31%]'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='w-full rounded-t-lg bg-dark-grey-blue px-6 py-[1.75rem] md:px-14 md:py-12'>
          <h2 className='font-h2 w-full text-[1.75rem] leading-[2rem] text-white md:text-[2.5rem] md:leading-[3rem]'>
            Order Summary
          </h2>
        </div>
        <div className='flex w-full flex-col items-center gap-6 px-6 pt-10 pb-6 md:gap-12 md:p-14'>
          <div className='flex w-full flex-col items-center md:gap-2'>
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
            <p className='font-body md:font-body text-[0.938rem] leading-[1.563rem] text-dark-grey-blue/80'>
              Is this correct? You can proceed to checkout or go back to plan
              selection if something is off. Subscription discount codes can
              also be redeemed at the checkout.{' '}
            </p>
          </div>
          <div className='w-full md:flex md:flex-row md:items-center md:gap-[0.813rem]'>
            <div className='font-checkout hidden w-[46.4%] md:block'>
              ${pricePerMonth} / mo
            </div>
            <button
              type='button'
              className='btn w-full md:w-[50.70%]'
              onClick={handleCheckout}
            >
              <div>
                Checkout{' '}
                <span className='md:hidden'> - ${pricePerMonth} / mo</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
