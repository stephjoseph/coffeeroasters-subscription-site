import { motion } from 'framer-motion';

const Step = ({ name, num, description, index }) => {
  return (
    <motion.div
      className='flex w-full flex-col items-center gap-6 md:items-start md:gap-[2.625rem] xl:w-[27.27%] xl:gap-[2.375rem]'
      // initial={{ opacity: 0, translateX: -100 }}
      // whileInView={{ opacity: 1, translateX: 0 }}
      // transition={{ duration: 0.67, ease: 'easeIn', delay: index * 0.67 }}
      // viewport={{ once: true }}
    >
      <div className='font-h1 text-pale-orange'>{num}</div>
      <div className='flex flex-col items-center gap-6 md:items-start md:gap-10 xl:gap-[2.625rem]'>
        <h3 className='font-h3 text-[1.75rem] leading-[2rem] text-dark-grey-blue xl:w-[89.47%] xl:text-[2rem] xl:leading-9'>
          {name}
        </h3>
        <p className='font-body xl:font-body text-[0.938rem] leading-[1.563rem] text-dark-grey-blue'>
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default Step;
