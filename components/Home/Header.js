import Link from 'next/link';

const Header = () => {
  return (
    <header className='mb-[7.5rem] flex w-[87.2%] flex-col items-center gap-10 rounded-[10px] px-6 py-[6.25rem] text-center md:mt-[0.813rem] md:w-[89.71%] md:items-start md:py-[6.5rem] md:px-[3.625rem] md:text-left xl:mb-[8.5rem] xl:mt-0 xl:w-[88.89%] xl:gap-14 xl:py-[7.313rem] xl:px-[5.313rem]'>
      <div className='flex flex-col items-center gap-6 md:w-[69.46%] md:items-start xl:w-[44.41%] xl:gap-8'>
        <h1 className='font-h1 xl:font-h1 text-[2.5rem] leading-[2.5rem] text-light-cream md:text-[3rem] md:leading-[3rem] '>
          Great coffee made simple.
        </h1>
        <p className='font-body xl:font-body text-[0.938rem] leading-[1.563rem] text-light-cream/80'>
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
      </div>
      <Link href='/plan'>
        <a className='btn'>Create your plan</a>
      </Link>
    </header>
  );
};

export default Header;
