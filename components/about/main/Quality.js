import Image from 'next/image';

const Quality = () => {
  return (
    <section className='flex flex-col items-center w-[87.2%]'>
      <div className='rounded-lg overflow-hidden h-[9.75rem] w-[85.32%] relative z-10'>
        <Image
          layout='fill'
          objectFit='cover'
          objectPosition='bottom center'
          alt='cup of latte'
          src='/assets/about/mobile/image-quality.jpg'
        />
      </div>
      <div className='flex flex-col items-center gap-6 pt-[8.875rem] text-center bg-[#2C343E] rounded-[10px] px-6 pb-[3.813rem] w-full -mt-[4.875rem]'>
        <h2 className='font-h2 text-[1.75rem] leading-[1.75rem] text-light-cream'>
          Uncompromising quality
        </h2>
        <p className='font-body text-[0.938rem] leading-[1.563rem] text-light-cream/80'>
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </p>
      </div>
    </section>
  );
};

export default Quality;
