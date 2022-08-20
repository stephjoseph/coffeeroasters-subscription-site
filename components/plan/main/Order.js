import Image from 'next/image';
import { useState, useContext } from 'react';
import { CoffeeContext } from '../../../context/CoffeeContext';

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
        text: '$7.20 per shipment. Includes free first-class shipping.',
      },
      {
        name: 'Every 2 weeks',
        text: '$9.60 per shipment. Includes free priority shipping.',
      },
      {
        name: 'Every month',
        text: '$12.00 per shipment. Includes free priority shipping.',
      },
    ],
  },
];

const Order = () => {
  const [state, setState] = useContext(CoffeeContext);

  const orderSummary = {
    preferences: state.preferences ? state.preferences : '_____',
    bean: state.bean ? state.bean : '_____',
    quantity: state.quantity ? state.quantity : '_____',
    grind: state.grind ? state.grind : '_____',
    deliveries: state.deliveries ? state.deliveries : '_____',
  };

  const [isOpen, setIsOpen] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const toggleOpen = (i) => {
    setIsOpen({ ...isOpen, [i]: !isOpen[i] });
  };

  return (
    <>
      <section className='w-[87.47%] flex flex-col items-center gap-24'>
        <h2 className='invisible absolute'>Choose your plan</h2>
        {plan.map(({ id, question, options, title }, i) => {
          return (
            <div key={id} className='flex flex-col items-center w-full'>
              <div
                className='flex justify-between items-center w-full cursor-pointer'
                onClick={() => toggleOpen(i)}
              >
                <h3 className='font-h3 text-[1.5rem] leading-[1.75rem] w-[73.17%] text-grey'>
                  {question}
                </h3>
                <div
                  className={`${
                    isOpen[i] ? 'rotate-180' : ''
                  } w-6 h-6 flex items-center justify-center cursor-pointer transition-[transform] duration-300 ease-in`}
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
                className={`${!isOpen[i] ? 'options' : 'options options-show'}`}
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
                        flex-col gap-2 bg-[#F4F1EB] p-6 rounded-lg  cursor-pointer z-10 
                        `}
                      onClick={() => {
                        setState({
                          ...state,
                          [title.toLowerCase()]: option.name,
                        });
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
      <section className='flex flex-col items-center gap-[3.5rem] w-[87.47%]'>
        <div className='flex flex-col gap-8 bg-[#2C343E] px-6 py-8 rounded-[10px]'>
          <h2 className='font-body uppercase text-white/[0.5037]'>
            Order Summary
          </h2>
          <p className='font-h2 text-[1.5rem] leading-[2.5rem] text-white'>
            “I drink my coffee as{' '}
            <span className='text-dark-cyan'>{orderSummary.preferences}</span>,
            with a <span className='text-dark-cyan'>{orderSummary.bean}</span>{' '}
            type of bean.{' '}
            <span className='text-dark-cyan'>{orderSummary.quantity}</span>{' '}
            ground ala{' '}
            <span className='text-dark-cyan'>{orderSummary.grind}</span>, sent
            to me{' '}
            <span className='text-dark-cyan'>{orderSummary.deliveries}</span>.”
          </p>
        </div>
        <button type='button' className='btn'>
          Create my plan!
        </button>
      </section>
    </>
  );
};

export default Order;
