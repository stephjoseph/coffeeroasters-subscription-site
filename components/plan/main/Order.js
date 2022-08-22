import Image from 'next/image';
import { useState, useContext, useEffect } from 'react';
import { CoffeeContext } from '../../../context/CoffeeContext';
import { ModalContext } from '../../../context/ModalContext';

const Order = () => {
  const [state, setState, orderComplete, setOrderComplete] =
    useContext(CoffeeContext);

  const [isModalOpen, setIsModalOpen, price, setPrice] =
    useContext(ModalContext);

  const [pricing, setPricing] = useState({
    perWeek: 0,
    per2Weeks: 0,
    perMonth: 0,
  });

  const [isOpen, setIsOpen] = useState({
    0: true,
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const plan = [
    {
      id: 0,
      title: 'Preferences',
      question: 'How do you drink your coffee?',
      options: [
        {
          name: 'Capsule',
          text: 'Compatible with Nespresso systems and similar brewers',
        },
        {
          name: 'Filter',
          text: 'For pour over or drip methods like Aeropress, Chemex, and V60',
        },
        {
          name: 'Espresso',
          text: 'Dense and finely ground beans for an intense, flavorful experience',
        },
      ],
    },
    {
      id: 1,
      title: 'Bean',
      question: 'What type of coffee?',
      options: [
        {
          name: 'Single Origin',
          text: 'Distinct, high quality coffee from a specific family-owned farm',
        },
        {
          name: 'Decaf',
          text: 'Just like regular coffee, except the caffeine has been removed',
        },
        {
          name: 'Blended',
          text: 'Combination of two or three dark roasted beans of organic coffees',
        },
      ],
    },
    {
      id: 2,
      title: 'Quantity',
      question: 'How much would you like?',
      options: [
        {
          name: '250g',
          text: 'Perfect for the solo drinker. Yields about 12 delicious cups.',
        },
        {
          name: '500g',
          text: 'Perfect option for a couple. Yields about 40 delectable cups.',
        },
        {
          name: '1000g',
          text: 'Perfect for offices and events. Yields about 90 delightful cups.',
        },
      ],
    },
    {
      id: 3,
      title: 'Grind',
      question: 'Want us to grind them?',
      options: [
        {
          name: 'Wholebean',
          text: 'Best choice if you cherish the full sensory experience',
        },
        {
          name: 'Filter',
          text: 'For drip or pour-over coffee methods such as V60 or Aeropress',
        },
        {
          name: 'Cafetiére',
          text: 'Course ground beans specially suited for french press coffee',
        },
      ],
    },
    {
      id: 4,
      title: 'Deliveries',
      question: 'How often should we deliver?',
      options: [
        {
          name: 'Every week',
          text: `$${pricing.perWeek.toFixed(
            2
          )} per shipment. Includes free first-class shipping.`,
        },
        {
          name: 'Every 2 weeks',
          text: `$${pricing.per2Weeks.toFixed(
            2
          )} per shipment. Includes free priority shipping.`,
        },
        {
          name: 'Every month',
          text: `$${pricing.perMonth.toFixed(
            2
          )} per shipment. Includes free priority shipping.`,
        },
      ],
    },
  ];

  const orderSummary = {
    preferences: state.preferences ? state.preferences : '_____',
    bean: state.bean ? state.bean : '_____',
    quantity: state.quantity ? state.quantity : '_____',
    grind: state.grind ? state.grind : '_____',
    deliveries: state.deliveries ? state.deliveries : '_____',
  };

  const toggleOpen = (i) => {
    setIsOpen({ ...isOpen, [i]: !isOpen[i] });
  };

  function pricePerShipment() {
    switch (state.quantity) {
      case '250g':
        setPricing({
          perWeek: 7.2,
          per2Weeks: 9.6,
          perMonth: 12.0,
        });
        break;
      case '500g':
        setPricing({
          perWeek: 13.0,
          per2Weeks: 17.5,
          perMonth: 22.0,
        });
        break;
      case '1000g':
        setPricing({
          perWeek: 22.0,
          per2Weeks: 32.0,
          perMonth: 42.0,
        });
        break;
      default:
        setPricing({
          perWeek: 0,
          per2Weeks: 0,
          perMonth: 0,
        });
    }
  }

  function checkProperties(_obj) {
    const allChecked =
      state.preferences !== 'Capsule' &&
      Object.values(state).filter((item) => item !== '').length === 5;
    const allCheckedExceptGrind =
      state.preferences === 'Capsule' &&
      Object.values(state).filter((item) => item !== '').length >= 4;

    if (allCheckedExceptGrind) {
      setOrderComplete(true);
    } else if (allChecked) {
      setOrderComplete(true);
    } else {
      setOrderComplete(false);
    }
  }

  function computePrice() {
    if (
      orderComplete &&
      state.quantity === '250g' &&
      state.deliveries === 'Every week'
    ) {
      setPrice(7.2);
    } else if (
      orderComplete &&
      state.quantity === '250g' &&
      state.deliveries === 'Every 2 weeks'
    ) {
      setPrice(9.6);
    } else if (
      orderComplete &&
      state.quantity === '250g' &&
      state.deliveries === 'Every month'
    ) {
      setPrice(12.0);
    } else if (
      orderComplete &&
      state.quantity === '500g' &&
      state.deliveries === 'Every week'
    ) {
      setPrice(13.0);
    } else if (
      orderComplete &&
      state.quantity === '500g' &&
      state.deliveries === 'Every 2 weeks'
    ) {
      setPrice(17.5);
    } else if (
      orderComplete &&
      state.quantity === '500g' &&
      state.deliveries === 'Every month'
    ) {
      setPrice(22.0);
    } else if (
      orderComplete &&
      state.quantity === '1000g' &&
      state.deliveries === 'Every week'
    ) {
      setPrice(22.0);
    } else if (
      orderComplete &&
      state.quantity === '1000g' &&
      state.deliveries === 'Every 2 weeks'
    ) {
      setPrice(32.0);
    } else if (
      orderComplete &&
      state.quantity === '1000g' &&
      state.deliveries === 'Every month'
    ) {
      setPrice(42.0);
    }
  }

  useEffect(() => {
    checkProperties(state);
    pricePerShipment();
  }, [state]);

  useEffect(() => {
    computePrice();
  }, [orderComplete, state]);

  return (
    <>
      <section className='flex w-[87.47%] flex-col items-center gap-24 md:w-[89.71%] md:gap-[6.25rem]'>
        <h2 className='invisible absolute'>Choose your plan</h2>
        {plan.map(({ id, question, options, title }, i) => {
          return (
            <div key={id} className='flex w-full flex-col items-center'>
              <div
                className={`${
                  i === 3 && state.preferences === 'Capsule'
                    ? 'pointer-events-none opacity-50'
                    : ''
                } flex w-full cursor-pointer items-center justify-between`}
                onClick={() => toggleOpen(i)}
              >
                <h3 className='font-h3 w-[73.17%] text-[1.5rem] leading-[1.75rem] text-grey md:w-max md:text-[2rem] md:leading-[3rem]'>
                  {question}
                </h3>
                <div
                  className={`${
                    isOpen[i] && !(state.preferences === 'Capsule' && i === 3)
                      ? 'rotate-180'
                      : ''
                  }
                  flex h-6 w-6 cursor-pointer items-center justify-center transition-[transform] duration-300 ease-in`}
                >
                  <Image
                    width={18.19}
                    height={11.92}
                    alt='arrow icon'
                    src='/assets/plan/desktop/icon-arrow.svg'
                  />
                </div>
              </div>
              <div
                className={`${
                  !isOpen[i] || (state.preferences === 'Capsule' && i === 3)
                    ? 'options'
                    : 'options options-show'
                }`}
              >
                {options.map((option) => {
                  return (
                    <div
                      key={option.name}
                      className={`${!isOpen[i] ? 'hidden' : 'flex'} ${
                        state[title.toLowerCase()] === option.name
                          ? 'option-selected'
                          : 'option-not-selected'
                      }
                        z-10 cursor-pointer flex-col gap-2 rounded-lg  bg-[#F4F1EB] p-6 md:w-[32.36%] md:gap-6  md:pt-8 md:pb-[5.25rem] 
                        `}
                      onClick={() => {
                        setState((prevState) => ({
                          ...prevState,
                          [title.toLowerCase()]: option.name,
                        }));
                      }}
                    >
                      <h4 className='font-h4 text-2xl '>{option.name}</h4>
                      <p className='font-body w-[99.29%] '>{option.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
      <section className='flex w-[87.47%] flex-col items-center gap-[3.5rem] md:w-[89.71%] md:gap-10'>
        <div className='flex flex-col gap-8 rounded-[10px] bg-[#2C343E] px-6 py-8 md:gap-2 md:py-[1.688rem] md:px-[2.75rem]'>
          <h2 className='font-body uppercase text-white/[0.5037]'>
            Order Summary
          </h2>
          <p className='font-h2 text-[1.5rem] leading-[2.5rem] text-white'>
            “I drink my coffee as{' '}
            <span className='text-dark-cyan'>{orderSummary.preferences}</span>,
            with a <span className='text-dark-cyan'>{orderSummary.bean}</span>{' '}
            type of bean.{' '}
            <span className='text-dark-cyan'>{orderSummary.quantity}</span>{' '}
            {state.preferences !== 'Capsule' && (
              <>
                ground ala{' '}
                <span className='text-dark-cyan'>{orderSummary.grind}</span>
              </>
            )}
            , sent to me{' '}
            <span className='text-dark-cyan'>{orderSummary.deliveries}</span>.”
          </p>
        </div>
        <button
          type='button'
          className={`${
            orderComplete ? 'btn' : 'btn pointer-events-none opacity-50'
          }`}
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Create my plan!
        </button>
      </section>
    </>
  );
};

export default Order;
