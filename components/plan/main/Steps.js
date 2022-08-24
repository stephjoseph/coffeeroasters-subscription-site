import Image from 'next/image';
import Step from './Step';
import { motion } from 'framer-motion';

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
    <section className='flex w-full flex-col items-center gap-20 rounded-[10px] bg-[#2C343E] px-6 py-20 text-center md:items-start md:gap-12 md:px-10 md:pb-[4.375rem] md:pt-[6.063rem] md:text-left xl:w-[88.89%] xl:gap-[4.188rem] xl:py-[6.25rem] xl:pr-[9.375rem] xl:pl-[5.313rem]'>
      <h2 className='font-h2 invisible absolute text-2xl text-grey'>
        How it works
      </h2>
      <div className='relative hidden w-[72.13%] items-center justify-between md:flex xl:w-[75.69%]'>
        <motion.div
          className='absolute left-px h-[0.125rem] w-full bg-pale-orange'
          initial={{ width: 0, opacity: 0.5 }}
          whileInView={{ width: '99%', opacity: 1 }}
          transition={{ duration: 2, ease: 'easeIn' }}
          viewport={{ once: true }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: 'easeIn' }}
          viewport={{ once: true }}
        >
          <Image
            width={31}
            height={31}
            src='/assets/plan/desktop/oval.svg'
            alt=''
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: 'easeIn', delay: 1.34 }}
          viewport={{ once: true }}
        >
          <Image
            width={31}
            height={31}
            src='/assets/plan/desktop/oval.svg'
            alt=''
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: 'easeIn', delay: 2 }}
          viewport={{ once: true }}
        >
          <Image
            width={31}
            height={31}
            src='/assets/plan/desktop/oval.svg'
            alt=''
          />
        </motion.div>
      </div>
      <div className='flex flex-col items-center gap-[3.5rem] md:flex-row md:items-start md:gap-[0.625rem] xl:gap-[5.938rem]'>
        {steps.map((step, i) => {
          return (
            <Step
              name={step.name}
              key={step.name}
              num={step.num}
              description={step.description}
              index={i}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Steps;
