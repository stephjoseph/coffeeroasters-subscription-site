import Image from 'next/image';

const Coffee = ({ name, image, description, alt }) => {
  return (
    <div className='flex flex-col items-center gap-6'>
      <Image width={200} height={151} src={image} alt={alt} />
      <div className='flex flex-col items-center text-center gap-4 w-[86.24%]'>
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
