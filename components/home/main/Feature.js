import Image from 'next/image';

const Feature = ({ name, image, description, alt, imgWidth, imgHeight }) => {
  return (
    <div className='flex w-[85.32%] flex-col gap-[3.5rem] rounded-lg bg-dark-cyan px-[0.75rem] pt-[4.5rem] pb-[3.188rem] md:w-[83.16%] md:flex-row md:items-center md:justify-center md:gap-[3.438rem] md:pl-[4.375rem] md:pr-12 md:pt-10  md:text-left xl:h-[23.875rem] xl:flex-col xl:justify-between xl:gap-0 xl:px-12 xl:pt-[4.5rem] xl:pb-12 xl:text-center'>
      <div className='flex items-center justify-center md:w-[12.30%] xl:w-[4.5rem]'>
        <Image src={image} width={imgWidth} height={imgHeight} alt={alt} />
      </div>
      <div className='flex flex-col items-center gap-6 md:w-[75.60%] md:items-start md:gap-4 xl:w-full xl:items-center xl:gap-6'>
        <h3 className='font-h3 text-[1.5rem] leading-[2rem] text-light-cream'>
          {name}
        </h3>
        <p className='font-body xl:font-body w-[83.14%] text-light-cream md:w-full md:text-[0.938rem] md:leading-[1.563rem]'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Feature;
