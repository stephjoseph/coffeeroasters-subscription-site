import Location from './Location';

const locations = [
  {
    country: 'United Kingdom',
    street: '68  Asfordby Rd',
    city: 'Alcaston',
    state: '',
    postal: 'SY6 1YA',
    phone: '+44 1241 918425',
    image: '/assets/about/desktop/illustration-uk.svg',
    imgWidth: 40.84,
    imgHeight: 49.07,
  },
  {
    country: 'Canada',
    street: '1528  Eglinton Avenue',
    city: 'Toronto',
    state: 'Ontario',
    postal: 'M4P 1A6',
    phone: '+1 416 485 2997',
    image: '/assets/about/desktop/illustration-canada.svg',
    imgWidth: 51.56,
    imgHeight: 49.96,
  },
  {
    country: 'Australia',
    street: '36 Swanston Street',
    city: 'Kewell',
    state: 'Victoria',
    postal: '',
    phone: '+61 4 9928 3629',
    image: '/assets/about/desktop/illustration-australia.svg',
    imgWidth: 48.97,
    imgHeight: 43.94,
  },
];

const Headquarters = () => {
  return (
    <section className='flex w-[87.2%] flex-col items-center gap-[4.5rem] md:w-[89.71%] md:items-start xl:w-[72.57%]'>
      <h2 className='font-h2 text-2xl text-grey'>Our headquarters</h2>
      <div className='flex w-full flex-col items-center gap-20 md:flex-row md:items-start md:gap-[0.625rem] xl:gap-[5.938rem]'>
        {locations.map((location) => {
          return <Location key={location.country} {...location} />;
        })}
      </div>
    </section>
  );
};

export default Headquarters;
