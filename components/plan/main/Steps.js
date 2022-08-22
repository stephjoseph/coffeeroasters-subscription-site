import Image from 'next/image';
import Step from './Step';

const steps = [
  {
    name: 'Pick your coffee',
    num: '01',
    alt: 'bag of gran espresso',
    description:
      'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.',
  },
  {
    name: 'Choose the frequency',
    num: '02',
    description:
      'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.',
  },
  {
    name: 'Receive and enjoy!',
    num: '03',
    description:
      'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.',
  },
];

const Steps = () => {
  return (
    <section className='flex w-full flex-col items-center gap-20 rounded-[10px] bg-[#2C343E] px-6 py-20 text-center md:items-start md:gap-12 md:px-10 md:pb-[4.375rem] md:pt-[6.063rem] md:text-left'>
      <h2 className='font-h2 invisible absolute text-2xl text-grey'>
        How it works
      </h2>
      <div className='relative mb-12 hidden w-[72.13%] items-center justify-between md:flex'>
        <div className='absolute h-[0.125rem] w-full bg-pale-orange'></div>
        <Image
          width={31}
          height={31}
          src='/assets/plan/desktop/oval.svg'
          alt=''
        />
        <Image
          width={31}
          height={31}
          src='/assets/plan/desktop/oval.svg'
          alt=''
        />
        <Image
          width={31}
          height={31}
          src='/assets/plan/desktop/oval.svg'
          alt=''
        />
      </div>
      <div className='flex flex-col items-center gap-[3.5rem] md:flex-row md:items-start md:gap-[0.625rem]'>
        {steps.map((step) => {
          return (
            <Step
              name={step.name}
              key={step.name}
              num={step.num}
              description={step.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Steps;
