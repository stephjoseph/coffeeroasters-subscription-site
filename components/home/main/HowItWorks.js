import Link from 'next/link';
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

const HowItWorks = () => {
  return (
    <section className='w-[87.2%] gap-20 flex flex-col items-center text-center'>
      <h2 className='font-h2 text-2xl text-grey'>How it works</h2>
      <div className='flex flex-col items-center gap-[3.5rem]'>
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
      <Link href='/create'>
        <a className='btn'>Create your plan</a>
      </Link>
    </section>
  );
};

export default HowItWorks;
