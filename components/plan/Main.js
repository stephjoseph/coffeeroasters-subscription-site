import Order from './main/Order';
import Steps from './main/Steps';

const Main = () => {
  return (
    <main className='mb-[7.5rem] flex w-full flex-col items-center gap-[7.5rem] xl:mb-[10.5rem] xl:gap-[10.5rem]'>
      <Steps />
      <Order />
    </main>
  );
};

export default Main;
