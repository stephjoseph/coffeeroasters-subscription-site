const Header = () => {
  return (
    <header className='w-[87.2%] flex flex-col items-center text-center mb-[7.5rem] rounded-[10px] px-6 pt-[6.938rem] pb-[5.438rem] gap-10'>
      <div className='flex flex-col items-center gap-6'>
        <h1 className='font-h1 text-[1.75rem] leading-[1.75rem] text-light-cream '>
          About Us
        </h1>
        <p className='font-body text-[0.938rem] leading-[1.563rem] text-light-cream/80'>
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
