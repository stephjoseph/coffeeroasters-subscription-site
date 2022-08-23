const Header = () => {
  return (
    <header className='mb-[7.5rem] flex w-[87.2%] flex-col items-center gap-10 rounded-[10px] px-6 pt-[6.313rem] pb-[8.5rem] text-center md:mt-[0.813rem] md:mb-[9rem] md:w-[89.71%] md:items-start md:py-[7.938rem] md:px-[3.625rem] md:text-left xl:mb-[10.5rem] xl:mt-0 xl:w-[88.89%] xl:py-[8.375rem] xl:px-[5.313rem]'>
      <div className='flex flex-col items-center gap-6 md:w-[69.46%] md:items-start xl:w-[40.54%] xl:gap-8'>
        <h1 className='font-h1 xl:font-h1 text-[2.5rem] leading-[2.5rem] text-light-cream md:text-[3rem] md:leading-[3rem] '>
          Create a plan
        </h1>
        <p className='font-body xl:font-body text-[0.938rem] leading-[1.563rem] text-light-cream/80'>
          Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.
        </p>
      </div>
    </header>
  );
};

export default Header;
