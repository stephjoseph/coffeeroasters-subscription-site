import Image from 'next/image';

const Coffee = ({ name, image, description, alt }) => {
  return (
    <div className='flex flex-col items-center gap-6 md:w-[83.16%] md:flex-row md:gap-9'>
      <div className='relative h-[9.438rem] w-[12.5rem] md:h-[12.063rem] md:w-[15.938rem]'>
        <Image layout='fill' objectFit='cover' src={image} alt={alt} />
      </div>

      <div className='flex w-[86.24%] flex-col items-center gap-4 text-center md:w-[49.21%] md:items-start md:gap-6 md:text-left'>
        <h3 className='font-h3 text-[1.5rem] leading-8 text-dark-grey-blue'>
          {name}
        </h3>
        <p className='font-body text-[0.938rem] leading-[1.563rem]'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Coffee;
