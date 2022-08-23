import Commitment from './main/Commitment';
import Headquarters from './main/Headquarters';
import Quality from './main/Quality';

const Main = () => {
  return (
    <main className='mb-[7.5rem] flex w-full flex-col items-center gap-[7.5rem] md:mb-[9rem] md:gap-[9rem] xl:mb-[10.5rem] xl:gap-[10.5rem]'>
      <Commitment />
      <Quality />
      <Headquarters />
    </main>
  );
};

export default Main;
