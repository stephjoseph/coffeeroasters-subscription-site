import Coffee from './Coffee';

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
    <section className='flex flex-col items-center w-[87.2%] gap-[0.813rem]'>
      <h2 className='font-title-alternate gradient-text text-[2.5rem] leading-[4.5rem] text-grey'>
        Our Collection
      </h2>
      <div className='flex flex-col items-center gap-12'>
        {coffeeCollection.map((coffee) => {
          return (
            <Coffee
              key={coffee.name}
              name={coffee.name}
              image={coffee.image}
              description={coffee.description}
              alt={coffee.alt}
            />
          );
        })}
      </div>
    </section>
  );
};

export default OurCollection;