const Step = ({ name, num, description }) => {
  return (
    <div className='flex w-full flex-col items-center gap-6 md:items-start md:gap-[2.625rem]'>
      <div className='font-h1 text-pale-orange'>{num}</div>
      <div className='flex flex-col items-center gap-6 md:items-start md:gap-10'>
        <h3 className='font-h3 text-[1.75rem] leading-[2rem] text-dark-grey-blue'>
          {name}
        </h3>
        <p className='font-body text-[0.938rem] leading-[1.563rem] text-dark-grey-blue'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Step;
