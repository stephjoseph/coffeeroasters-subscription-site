import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className='flex w-screen max-w-[1920px] items-center justify-between p-10 xl:px-20 xl:py-[2.75rem]'>
      <Link href='/'>
        <a className='relative h-[1.625rem] w-[14.75rem] xl:h-6 xl:w-[12.688rem]'>
          <Image
            layout='fill'
            objectFit='contain'
            src='/assets/shared/desktop/logo.svg'
            alt='Logo'
          />
        </a>
      </Link>
      <div className='font-nav flex items-center justify-center gap-8 uppercase text-grey'>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/about'>
          <a>About Us</a>
        </Link>
        <Link href='/plan'>
          <a>Create Your Plan</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
