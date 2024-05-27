import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <div className="flex justify-center fixed z-[99999] w-full top-0">
      <nav aria-label="primary" id="navbar" className="navbar bg-[#fff] self-center h-[80px] w-full flex shadow-lg">
        <div className="w-full flex items-center justify-between my-auto md:gap-4 lg:gap-6 2xl:px-[7.5rem] xl:px-[6rem] lg:px-[4.5rem] md:px-[3rem] px-[1.5rem] max-w-screen-2xl mx-auto">
          <div className="flex gap-10">
            <Link type="button" aria-label="Lifesight" className="self-center" href="/">
              <Image alt="Lifesight" aria-hidden="true" loading="lazy" width="100" height="70" decoding="async" data-nImage="1" src="https://www.lifesight.io/_next/static/media/Lifesight.3ae54fe5.svg" />
            </Link>
            <div className="lg:flex lg:flex-start self-center hidden md:hidden">
              <menu className="w-full flex justify-start gap-8 hover:transition-all">
                <div className="cursor-pointer flex h-[80px] items-center transition-all duration-100">
                  <p className="text-gray-500 group-hover:text-gray-700 downArrow self-center font-semibold color-white flex items-center justify-center gap-1">
                    Products
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-0">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3986 15.6629C12.1789 15.8826 11.8228 15.8826 11.6031 15.6629L5.86824 9.92804C5.64857 9.70837 5.64857 9.35227 5.86824 9.13259L6.13341 8.86739C6.35308 8.64772 6.70923 8.64772 6.92891 8.86739L12.0008 13.9393L17.0728 8.86739C17.2925 8.64772 17.6486 8.64772 17.8682 8.86739L18.1334 9.13259C18.3531 9.35227 18.3531 9.70837 18.1334 9.92804L12.3986 15.6629Z" fill="currentColor"></path>
                    </svg>
                  </p>
                </div>
                <button className="cursor-pointer flex items-center h-[80px]">
                  <p className="text-gray-500 group-hover:text-gray-700 font-semibold downArrow self-center color-white flex items-center justify-center gap-1">
                    Solutions
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-0">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3986 15.6629C12.1789 15.8826 11.8228 15.8826 11.6031 15.6629L5.86824 9.92804C5.64857 9.70837 5.64857 9.35227 5.86824 9.13259L6.13341 8.86739C6.35308 8.64772 6.70923 8.64772 6.92891 8.86739L12.0008 13.9393L17.0728 8.86739C17.2925 8.64772 17.6486 8.64772 17.8682 8.86739L18.1334 9.13259C18.3531 9.35227 18.3531 9.70837 18.1334 9.92804L12.3986 15.6629Z" fill="currentColor"></path>
                    </svg>
                  </p>
                </button>
                <button className="cursor-pointer flex items-center h-[80px]">
                  <p className="downArrow text-gray-500 group-hover:text-gray-700 font-semibold downArrow self-center color-white flex items-center justify-center gap-1">
                    Resources
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-0">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3986 15.6629C12.1789 15.8826 11.8228 15.8826 11.6031 15.6629L5.86824 9.92804C5.64857 9.70837 5.64857 9.35227 5.86824 9.13259L6.13341 8.86739C6.35308 8.64772 6.70923 8.64772 6.92891 8.86739L12.0008 13.9393L17.0728 8.86739C17.2925 8.64772 17.6486 8.64772 17.8682 8.86739L18.1334 9.13259C18.3531 9.35227 18.3531 9.70837 18.1334 9.92804L12.3986 15.6629Z" fill="currentColor"></path>
                    </svg>
                  </p>
                </button>
                <li className="hidden xl:flex relative">
                  <Link className="text-gray-500 font-semibold downArrow self-center color-white flex items-center justify-center gap-1 hover:text-gray-700" href="/demo-hub">
                    Platform Tour
                  </Link>
                </li>
                <li className="flex relative">
                  <Link className="text-gray-500 font-semibold downArrow self-center color-white flex items-center justify-center gap-1 hover:text-gray-700" href="/pricing">
                    Pricing
                  </Link>
                </li>
              </menu>
            </div>
          </div>
          <div className="flex">
            <div className="nav-buttons gap-4 self-center flex">
              <Link type="button" className=" rounded-md text-white border border-[#6938EF] bg-[#6938EF] hover:bg-[#8555FF] hover:border hover:border-[#6938EF] px-4 py-1.5 font-semibold request-demo" href="/demo">
                Request Demo
              </Link>
              <button type="button" className="hidden md:hidden lg:block bg-transparent py-1.5 font-semibold hover:underline">
                <Link href="https://console.lifesight.io/login">Log in</Link>
              </button>
              <button type="button" className="nav-button bg-white rounded-lg p-2 block lg:hidden">
                <Image alt="hamburger-icon" loading="lazy" width="20" height="20" decoding="async" data-nImage="1" className="transition-all ease-in-out duration-200" src="https://www.lifesight.io/_next/static/media/hamburger.a38b8eb5.svg" />
              </button>
              <div id="mob-nav" className="block xl:hidden absolute w-[100vw] overscroll-y-auto left-0 top-[70px] mob-nav-container duration-300 transition-all"></div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;