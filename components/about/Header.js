const Header = () => {
  return (
    <header className='mb-[7.5rem] flex w-[87.2%] flex-col items-center gap-10 rounded-[10px] px-6 pt-[6.938rem] pb-[5.438rem] text-center md:mt-[0.813rem] md:mb-[9rem] md:w-[89.71%] md:items-start md:py-[7.375rem] md:px-[3.625rem] md:text-left xl:mb-[10.5rem] xl:mt-0 xl:w-[88.89%] xl:py-[8.563rem] xl:px-[5.313rem]'>
      <div className='flex flex-col items-center gap-6 md:w-[69.45%] md:items-start xl:w-[40.09%]'>
        <h1 className='font-h1 text-[1.75rem] leading-[1.75rem] text-light-cream md:text-[2rem] md:leading-[2.5rem] xl:text-[2.5rem] xl:leading-[3rem] '>
          About Us
        </h1>
        <p className='font-body xl:font-body text-[0.938rem] leading-[1.563rem] text-light-cream/80'>
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </p>
      </div>
    </header>
  );
};

export default Header;
