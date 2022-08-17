import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='w-[87.2%] bg-[#2C343E] flex flex-col items-center mb-[4.5rem] py-[3.5rem] gap-12'>
      <Link href='/'>
        <a>
          <Image
            width={217}
            height={23}
            src='/assets/shared/desktop/logo-white.svg'
            alt='logo'
          />
        </a>
      </Link>
      <nav
        id='footer-nav'
        className='flex flex-col items-center gap-6 font-footer'
      >
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/about'>
          <a>About Us</a>
        </Link>
        <Link href='/create'>
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
