import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='mb-[4.5rem] flex w-[87.2%] flex-col items-center gap-12 bg-[#2C343E] py-[3.5rem] md:w-[89.58%] md:gap-0 md:py-[3.375rem]'>
      <Link href='/'>
        <a className='relative h-[1.438rem] w-[13.563rem] md:mb-8 md:h-[1.625rem] md:w-[14.75rem]'>
          <Image
            layout='fill'
            objectFit='cover'
            src='/assets/shared/desktop/logo-white.svg'
            alt='logo'
          />
        </a>
      </Link>
      <nav
        id='footer-nav'
        className='font-footer flex flex-col items-center gap-6 md:mb-16 md:flex-row md:gap-8'
      >
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/about'>
          <a>About Us</a>
        </Link>
        <Link href='/plan'>
          <a>Create Your Plan</a>
        </Link>
      </nav>
      <div className='flex items-center gap-6'>
        <Link href='/'>
          <a>
            <Image
              width={24}
              height={25}
              alt='facebook icon'
              src='/assets/shared/desktop/icon-facebook.svg'
            />
          </a>
        </Link>
        <Link href='/'>
          <a>
            <Image
              width={24}
              height={19.5}
              alt='facebook icon'
              src='/assets/shared/desktop/icon-twitter.svg'
            />
          </a>
        </Link>
        <Link href='/'>
          <a>
            <Image
              width={24}
              height={25}
              alt='facebook icon'
              src='/assets/shared/desktop/icon-instagram.svg'
            />
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
