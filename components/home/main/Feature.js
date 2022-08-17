import Image from 'next/image';

const Feature = ({ name, image, description, alt, imgWidth, imgHeight }) => {
  return (
    <div className='flex flex-col gap-[3.5rem] w-[85.32%] bg-dark-cyan rounded-lg pt-[4.5rem] pb-[3.188rem] px-[0.75rem]'>
      <div>
        <Image src={image} width={imgWidth} height={imgHeight} alt={alt} />
      </div>
      <div className='flex flex-col items-center gap-6'>
        <h3 className='font-h3 text-[1.5rem] leading-[2rem] text-light-cream'>
          {name}
        </h3>
        <p className='w-[83.14%] font-body text-light-cream'>{description}</p>
      </div>
    </div>
  );
};

export default Feature;
