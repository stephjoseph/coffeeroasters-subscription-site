const Step = ({ name, num, description }) => {
  return (
    <div className='flex flex-col items-center gap-6 w-full'>
      <div className='font-h1 text-pale-orange'>{num}</div>
      <div className='flex flex-col items-center gap-6'>
        <h3 className='font-h3 text-dark-grey-blue text-[1.75rem] leading-[2rem]'>
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
