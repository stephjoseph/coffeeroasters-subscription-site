import Image from 'next/image';
import { motion } from 'framer-motion';

const Coffee = ({ name, image, description, alt, index }) => {
  return (
    <div className='flex flex-col items-center gap-6 md:w-[83.16%] md:flex-row md:gap-9 xl:w-[23.06%] xl:flex-col xl:gap-[4.5rem]'>
      <motion.div
        className='relative h-[9.438rem] w-[12.5rem] md:h-[12.063rem] md:w-[15.938rem] xl:w-[16rem]'
        // initial={{ opacity: 0, translateY: 50 }}
        // whileInView={{ opacity: 1, translateY: 0 }}
        // transition={{ duration: 0.5, ease: 'easeIn', delay: index * 0.3 + 0.3 }}
        // viewport={{ once: true }}
      >
        <Image layout='fill' objectFit='cover' src={image} alt={alt} />
      </motion.div>
      <motion.div
        className='flex w-[86.24%] flex-col items-center gap-4 text-center md:w-[49.21%] md:items-start md:gap-6 md:text-left xl:w-full xl:items-center xl:text-center'
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        // transition={{ duration: 0.5, ease: 'easeIn', delay: index * 0.3 + 0.3 }}
        // viewport={{ once: true }}
      >
        <h3 className='font-h3 text-[1.5rem] leading-8 text-dark-grey-blue'>
          {name}
        </h3>
        <p className='font-body  xl:font-body text-[0.938rem] leading-[1.563rem] text-dark-grey-blue'>
          {description}
        </p>
      </motion.div>
    </div>
  );
};

export default Coffee;
