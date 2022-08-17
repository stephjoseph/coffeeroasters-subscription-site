import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
  return (
    <nav className='py-8 flex justify-between items-center w-[87.2%]'>
      <Link href='/'>
        <a>
          <Image
            width={163}
            height={18}
            src='/assets/shared/desktop/logo.svg'
            alt='Logo'
          />
        </a>
      </Link>
      <button type='button'>
        <Image
          width={16}
          height={16}
          src='/assets/shared/mobile/icon-hamburger.svg'
          alt='menu button'
        />
      </button>
    </nav>
  );
};

export default Nav;
