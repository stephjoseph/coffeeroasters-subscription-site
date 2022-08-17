import HowItWorks from './main/HowItWorks';
import OurCollection from './main/OurCollection';
import WhyChooseUs from './main/WhyChooseUs';

const Main = () => {
  return (
    <main className='flex flex-col items-center w-full gap-[7.5rem] mb-[7.5rem]'>
      <OurCollection />
      <WhyChooseUs />
      <HowItWorks />
    </main>
  );
};

export default Main;
