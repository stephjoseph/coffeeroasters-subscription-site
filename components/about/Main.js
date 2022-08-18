import Commitment from './main/Commitment';
import Headquarters from './main/Headquarters';
import Quality from './main/Quality';

const Main = () => {
  return (
    <main className='flex flex-col items-center w-full gap-[7.5rem] mb-[7.5rem]'>
      <Commitment />
      <Quality />
      <Headquarters />
    </main>
  );
};

export default Main;
