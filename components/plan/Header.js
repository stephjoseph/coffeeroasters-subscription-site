const Header = () => {
  return (
    <header className='w-[87.2%] flex flex-col items-center text-center mb-[7.5rem] rounded-[10px] px-6 pt-[6.313rem] pb-[8.5rem] gap-10'>
      <div className='flex flex-col items-center gap-6'>
        <h1 className='font-h1 text-[2.5rem] leading-[2.5rem] text-light-cream '>
          Create a plan
        </h1>
        <p className='font-body text-[0.938rem] leading-[1.563rem] text-light-cream/80'>
          Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.
        </p>
      </div>
    </header>
  );
};

export default Header;
