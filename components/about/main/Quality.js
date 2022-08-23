import Image from 'next/image';

const Quality = () => {
  return (
    <section className='flex w-[87.2%] flex-col items-center md:w-[89.71%] xl:w-[88.89%] xl:items-start'>
      <div className='relative z-10 h-[9.75rem] w-[85.32%] overflow-hidden rounded-lg md:hidden'>
        <Image
          layout='fill'
          objectFit='cover'
          objectPosition='bottom center'
          alt='cup of latte'
          src='/assets/about/mobile/image-quality.jpg'
        />
      </div>
      <div className='relative z-10 hidden h-[20rem] w-[83.16%] overflow-hidden rounded-lg md:block xl:hidden'>
        <Image
          layout='fill'
          objectFit='cover'
          objectPosition='bottom center'
          alt='cup of latte'
          src='/assets/about/tablet/image-quality.jpg'
        />
      </div>
      <div className='relative z-10 hidden h-[29.625rem] w-[83.16%] overflow-hidden rounded-lg md:block xl:mr-[5.313rem] xl:ml-auto xl:block xl:w-[34.77%]'>
        <Image
          layout='fill'
          objectFit='cover'
          objectPosition='bottom center'
          alt='cup of latte'
          src='/assets/about/desktop/image-quality.jpg'
        />
      </div>
      <div className='-mt-[4.875rem] flex w-full flex-col items-center gap-6 rounded-[10px] bg-[#2C343E] px-6 pt-[8.875rem] pb-[3.813rem] text-center md:-mt-[10rem] md:px-[4.625rem] md:pb-[4.188rem] md:pt-[14rem] xl:-mt-[24.125rem] xl:items-start xl:gap-8 xl:px-[5.313rem] xl:pb-[11rem] xl:pt-[5.5rem] xl:text-left'>
        <h2 className='font-h2 xl: text-[1.75rem] leading-[1.75rem] text-light-cream md:text-[2rem] md:leading-[3rem] xl:w-[54%]'>
          Uncompromising quality
        </h2>
        <p className='font-body xl:font-body text-[0.938rem] leading-[1.563rem] text-light-cream/80 xl:w-[54%]'>
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
