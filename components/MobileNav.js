import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive((prevState) => !prevState);
  }

  return (
    <nav className='sticky top-0 z-50 mb-2 flex w-screen flex-col items-center bg-light-cream px-6 py-8 transition-transform duration-300 ease-in'>
      <div className='relative flex w-full items-center justify-between'>
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
        <button
          type='button'
          className={`${
            isActive ? 'inactive-button' : 'absolute top-[0.125rem] right-0'
          } transition-[transform,_opacity] duration-300 ease-in`}
          onClick={handleClick}
        >
          <Image
            width={16}
            height={16}
            src='/assets/shared/mobile/icon-hamburger.svg'
            alt='menu button'
          />
        </button>
        <button
          type='button'
          className={`${
            !isActive ? 'inactive-button' : 'absolute top-[0.125rem] right-0'
          } transition-[transform,_opacity] duration-300 ease-in`}
          onClick={handleClick}
        >
          <Image
            width={16}
            height={16}
            src='/assets/shared/mobile/icon-close.svg'
            alt='menu button'
          />
        </button>
      </div>
      <div
        className={`${
          !isActive ? 'inactive-nav' : ''
        } fixed top-[5.5rem] flex h-screen w-full flex-col items-center gap-8 bg-gradient-to-b from-light-cream via-light-cream to-white/50 pt-10 transition-opacity duration-300 ease-in`}
      >
        <Link href='/'>
          <a
            className='font-mobile-nav text-dark-grey-blue'
            onClick={handleClick}
          >
            Home
          </a>
        </Link>
        <Link href='/about'>
          <a
            className='font-mobile-nav text-dark-grey-blue'
            onClick={handleClick}
          >
            About Us
          </a>
        </Link>
        <Link href='/plan'>
          <a
            className='font-mobile-nav text-dark-grey-blue'
            onClick={handleClick}
          >
            Create Your Plan
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
