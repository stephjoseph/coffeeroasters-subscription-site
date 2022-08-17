import Link from 'next/link';

const Header = () => {
  return (
    <header className='w-[87.2%] flex flex-col items-center text-center mb-[7.5rem] rounded-[10px] px-6 py-[6.25rem] gap-10'>
      <div className='flex flex-col items-center gap-6'>
        <h1 className='font-h1 text-[2.5rem] leading-[2.5rem] text-light-cream '>
          Great coffee made simple.
        </h1>
        <p className='font-body text-[0.938rem] leading-[1.563rem] text-light-cream/80'>
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
      </div>
      <Link href='/create'>
        <a className='btn'>Create your plan</a>
      </Link>
    </header>
  );
};

export default Header;
