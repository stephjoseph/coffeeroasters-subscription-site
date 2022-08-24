import Image from 'next/image';
import { motion } from 'framer-motion';

const Commitment = () => {
  return (
    <section className='flex w-[87.2%] flex-col items-center gap-12 md:w-[89.71%] md:flex-row md:gap-[4.313rem] xl:w-[77.08%] xl:gap-[7.813rem]'>
      <motion.div
        className='relative h-[25rem] w-full overflow-hidden rounded-lg md:hidden'
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        viewport={{ once: true }}
      >
        <Image
          layout='fill'
          objectFit='cover'
          objectPosition='bottom center'
          alt='barista doing latte art'
          src='/assets/about/mobile/image-commitment.jpg'
        />
      </motion.div>
      <motion.div
        className='relative hidden h-[29.375rem] w-[40.78%] overflow-hidden rounded-lg md:block xl:hidden'
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        viewport={{ once: true }}
      >
        <Image
          layout='fill'
          objectFit='cover'
          objectPosition='top center'
          alt='barista doing latte art'
          src='/assets/about/tablet/image-commitment.jpg'
        />
      </motion.div>
      <motion.div
        className='relative hidden h-[32.5rem] w-[40.09%] overflow-hidden rounded-lg xl:block'
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        viewport={{ once: true }}
      >
        <Image
          layout='fill'
          objectFit='cover'
          objectPosition='top center'
          alt='barista doing latte art'
          src='/assets/about/desktop/image-commitment.jpg'
        />
      </motion.div>
      <motion.div
        className='flex flex-col items-center gap-[1.875rem] text-center md:w-[49.20%] md:items-start md:text-left xl:w-[48.65%] xl:gap-8'
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        viewport={{ once: true }}
      >
        <h2 className='font-h2 xl:font-h2 text-[2rem] leading-[3rem] text-dark-grey-blue'>
          Our Commitment
        </h2>
        <p className='font-body xl:font-body text-[0.938rem] leading-[1.563rem] text-dark-grey-blue'>
          We’re built on a simple mission and a commitment to doing good along
          the way. We want to make it easy for you to discover and brew the
          world’s best coffee at home. It all starts at the source. To locate
          the specific lots we want to purchase, we travel nearly 60 days a year
          trying to understand the challenges and opportunities in each of these
          places. We collaborate with exceptional coffee growers and empower a
          global community of farmers through with well above fair-trade
          benchmarks. We also offer training, support farm community
          initiatives, and invest in coffee plant science. Curating only the
          finest blends, we roast each lot to highlight tasting profiles
          distinctive to their native growing region.
        </p>
      </motion.div>
    </section>
  );
};

export default Commitment;
