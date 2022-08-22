import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className='flex w-screen items-center justify-between p-10'>
      <Link href='/'>
        <a>
          <Image
            width={236}
            height={26}
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
