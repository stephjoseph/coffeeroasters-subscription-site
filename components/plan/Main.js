import Order from './main/Order';
import Steps from './main/Steps';

const Main = () => {
  return (
    <main className='flex flex-col items-center w-full gap-[7.5rem] mb-[7.5rem]'>
      <Steps />
      <Order />
    </main>
  );
};

export default Main;
