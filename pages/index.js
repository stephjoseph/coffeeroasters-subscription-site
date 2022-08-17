import Header from '../components/home/Header';
import Main from '../components/home/Main';

const Home = () => {
  return (
    <div id='home' className='flex flex-col items-center w-full'>
      <Header />
      <Main />
    </div>
  );
};

export default Home;
