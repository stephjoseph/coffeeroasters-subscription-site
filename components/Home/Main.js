import HowItWorks from './main/HowItWorks';
import OurCollection from './main/OurCollection';
import WhyChooseUs from './main/WhyChooseUs';

const Main = () => {
  return (
    <main className='mb-[7.5rem] flex w-full flex-col items-center gap-[7.5rem] md:mb-[9rem] md:gap-[9rem]'>
      <OurCollection />
      <WhyChooseUs />
      <HowItWorks />
    </main>
  );
};

export default Main;
