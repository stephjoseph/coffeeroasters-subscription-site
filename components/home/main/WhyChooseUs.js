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
    <section className='flex flex-col items-center w-[87.2%] text-center'>
      <div className='flex flex-col items-center gap-6 bg-[#2C343E] rounded-[10px] px-6 pt-16 pb-[41.313rem] relative overflow-clip '>
        <h2 className='font-h2 text-[1.75rem] leading-[1.75rem] text-light-cream'>
          Why choose us?
        </h2>
        <p className='font-body text-[0.938rem] leading-[1.563rem] text-light-cream/80'>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
        <div className='absolute md:hidden whychoose-bg h-[40.688rem] top-[269px] w-full opacity-[0.15]'></div>
      </div>
      <div className='flex flex-col items-center gap-6 z-10 -mt-[37.313rem]'>
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
