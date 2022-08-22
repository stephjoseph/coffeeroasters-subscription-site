import Feature from './Feature';

const features = [
  {
    name: 'Best quality',
    image: '/assets/home/desktop/icon-coffee-bean.svg',
    imgWidth: '72',
    imgHeight: '72',
    alt: 'coffee bean icon',
    description:
      'Discover an endless variety of the world’s best artisan coffee from each of our roasters.',
  },
  {
    name: 'Exclusive benefits',
    image: '/assets/home/desktop/icon-gift.svg',
    imgWidth: '72',
    imgHeight: '72',
    alt: 'gift icon',
    description:
      'Special offers and swag when you subscribe, including 30% off your first shipment.',
  },
  {
    name: 'Free shipping',
    image: '/assets/home/desktop/icon-truck.svg',
    imgWidth: '72',
    imgHeight: '50',
    alt: 'truck icon',
    description:
      'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className='flex w-[87.2%] flex-col items-center text-center md:w-[89.71%] xl:w-[88.89%]'>
      <div className='relative flex flex-col items-center gap-6 overflow-clip rounded-[10px] bg-[#2C343E] px-6 pt-16 pb-[41.313rem] md:px-[4.5rem] md:pb-[23rem] md:pt-14 xl:gap-8 xl:px-[23.125rem] xl:pb-[19.813rem] xl:pt-[6.25rem] '>
        <h2 className='font-h2 text-[1.75rem] leading-[1.75rem] text-light-cream xl:text-[2.5rem] xl:leading-[3rem]'>
          Why choose us?
        </h2>
        <p className='font-body xl:font-body text-[0.938rem] leading-[1.563rem] text-light-cream/80'>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
        <div className='whychoose-bg absolute top-[269px] h-[40.688rem] w-full opacity-[0.15] md:hidden'></div>
      </div>
      <div className='z-10 -mt-[37.313rem] flex w-full flex-col items-center gap-6 md:-mt-[18.625rem] xl:w-[86.72%] xl:flex-row xl:items-start xl:gap-[1.875rem]'>
        {features.map((feature) => {
          return (
            <Feature
              key={feature.name}
              name={feature.name}
              image={feature.image}
              imgWidth={feature.imgWidth}
              imgHeight={feature.imgHeight}
              alt={feature.alt}
              description={feature.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUs;
