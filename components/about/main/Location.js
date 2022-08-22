import Image from 'next/image';

const Location = ({
  country,
  street,
  city,
  state,
  postal,
  phone,
  image,
  imgWidth,
  imgHeight,
}) => {
  return (
    <div className='flex flex-col gap-12 text-center md:w-[32.36%] md:items-start md:text-left'>
      <div>
        <Image
          width={imgWidth}
          height={imgHeight}
          alt={`${country} map icon`}
          src={image}
        />
      </div>
      <div className='flex flex-col items-center gap-[1.375rem] md:items-start'>
        <h3 className='font-h3 text-[1.75rem] leading-9 text-dark-grey-blue md:text-[1.5rem]'>
          {country}
        </h3>
        <div className='font-body text-dark-grey-blue'>
          {street} <br />
          {city} <br />
          {`${state ? state : ''} ${postal ? postal : ''}`}
          <br /> {phone}
        </div>
      </div>
    </div>
  );
};

export default Location;
