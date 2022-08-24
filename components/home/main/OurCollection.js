import Coffee from './Coffee';
import { motion } from 'framer-motion';

const coffeeCollection = [
  {
    name: 'Gran Espresso',
    image: '/assets/home/desktop/image-gran-espresso.png',
    alt: 'bag of gran espresso',
    description:
      'Light and flavorful blend with cocoa and black pepper for an intense experience',
  },
  {
    name: 'Planalto',
    image: '/assets/home/desktop/image-planalto.png',
    alt: 'bag of planalto',
    description:
      'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts',
  },
  {
    name: 'Piccollo',
    image: '/assets/home/desktop/image-piccollo.png',
    alt: 'bag of piccollo',
    description:
      'Mild and smooth blend featuring notes of toasted almond and dried cherry',
  },
  {
    name: 'Danche',
    image: '/assets/home/desktop/image-danche.png',
    alt: 'bag of danche',
    description:
      'Ethiopian hand-harvested blend densely packed with vibrant fruit notes',
  },
];

const OurCollection = () => {
  return (
    <section className='flex w-[87.2%] flex-col items-center gap-[0.813rem] md:w-[89.71%] md:gap-[0] xl:w-[77.08%]'>
      <motion.h2
        className='font-title-alternate  
      xl:font-title-alternate gradient-text pt-6 text-[2.5rem] leading-[4.5rem] text-grey md:text-[6rem] md:leading-[4.5rem]'
        // initial={{ opacity: 0, translateY: 50 }}
        // whileInView={{ opacity: 1, translateY: 0 }}
        // transition={{ duration: 0.5, ease: 'easeIn' }}
        // viewport={{ once: true }}
      >
        Our Collection
      </motion.h2>
      <div className='flex flex-col items-center gap-12 md:-mt-[2rem] md:gap-8 xl:flex-row xl:items-start xl:gap-[1.875rem]'>
        {coffeeCollection.map((coffee, i) => {
          return (
            <Coffee
              key={coffee.name}
              name={coffee.name}
              image={coffee.image}
              description={coffee.description}
              alt={coffee.alt}
              index={i}
            />
          );
        })}
      </div>
    </section>
  );
};

export default OurCollection;
