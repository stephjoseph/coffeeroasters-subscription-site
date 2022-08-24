import Link from 'next/link';
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

const HowItWorks = () => {
  return (
    <section className='flex w-[87.2%] flex-col items-center gap-20 text-center md:w-[89.71%] md:items-start md:gap-0 md:text-left xl:w-[77.08%] xl:items-start'>
      <motion.h2
        className='font-h2 text-2xl text-grey md:mb-10 xl:mb-20'
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.4, ease: 'easeIn' }}
      >
        How it works
      </motion.h2>
      <div className='relative mb-12 hidden w-[72.13%] items-center justify-between md:flex xl:mb-[4.188rem] xl:w-[71.26%]'>
        <motion.div
          className='absolute h-[0.125rem] w-full bg-pale-orange'
          initial={{ width: 0, opacity: 0.5 }}
          whileInView={{ width: '100%', opacity: 1 }}
          transition={{ duration: 2, ease: 'easeIn' }}
          viewport={{ once: true }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeIn' }}
          viewport={{ once: true }}
        >
          <Image
            width={31}
            height={31}
            src='/assets/home/desktop/oval.svg'
            alt=''
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeIn', delay: 1.34 }}
          viewport={{ once: true }}
        >
          <Image
            width={31}
            height={31}
            src='/assets/home/desktop/oval.svg'
            alt=''
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeIn', delay: 2 }}
          viewport={{ once: true }}
        >
          <Image
            width={31}
            height={31}
            src='/assets/home/desktop/oval.svg'
            alt=''
          />
        </motion.div>
      </div>
      <div className='flex flex-col items-center gap-[3.5rem] md:mb-[2.75rem] md:flex-row md:items-start md:gap-[0.625rem] xl:mb-16 xl:w-[94.14%] xl:gap-[5.938rem]'>
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
      <Link href='/plan'>
        <motion.a
          className='btn'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeIn', delay: 1 }}
          viewport={{ once: true }}
        >
          Create your plan
        </motion.a>
      </Link>
    </section>
  );
};

export default HowItWorks;
