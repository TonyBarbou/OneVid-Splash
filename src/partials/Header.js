import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Transition from '../utils/Transition.js';

function Header() {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [top, setTop] = useState(true);

  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNavOpen || mobileNav.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white blur shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-blue-400 text-2xl font-bold">OneVid</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:flex-grow">

            {/* Desktop menu links */}
            <ul className="flex flex-grow flex-wrap justify-center items-center" >
              <li>
                <Link to="/404" className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Tarification</Link>
              </li>
              <li>
                <Link to="/404" className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">À propos de nous</Link>
              </li>
              <li>
                <Link to="/404" className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Blog</Link>
              </li>              
                <li>
                  <Link to="/404" className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Documentation</Link>
                </li>
                <li>
                  <Link to="/404" className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Support</Link>
                </li>
            </ul>

          </nav>

          {/* Mobile menu */}
          <div className="flex md:hidden">

            {/* Hamburger button */}
            <button
              className={`hamburger ${mobileNavOpen && 'active'}`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6 fill-current text-gray-900" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="24" height="2" />
                <rect y="11" width="24" height="2" />
                <rect y="18" width="24" height="2" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <div ref={mobileNav}>
              <Transition
                show={mobileNavOpen}
                tag="nav"
                id="mobile-nav"
                className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white transition-all duration-300 ease-in-out"
                enter="transition ease-out duration-200 transform"
                enterStart="opacity-0 -translate-y-2"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-out duration-200"
                leaveStart="opacity-100"
                leaveEnd="opacity-0"              
              >
                <ul className="px-5 py-2">
                  <li>
                    <Link to="/pricing" className="flex text-gray-600 hover:text-gray-900 py-2">Pricing</Link>
                  </li>
                  <li>
                    <Link to="/about" className="flex text-gray-600 hover:text-gray-900 py-2">About us</Link>
                  </li>
                  <li>
                    <Link to="/tutorials" className="flex text-gray-600 hover:text-gray-900 py-2">Tutorials</Link>
                  </li>  
                  <li>
                    <Link to="/blog" className="flex text-gray-600 hover:text-gray-900 py-2">Blog</Link>
                  </li>                                  
                  <li className="py-2 my-2 border-t border-b border-gray-200">
                    <span className="flex text-gray-600 hover:text-gray-900 py-2">Resources</span>
                    <ul className="pl-4">
                      <li>
                        <Link to="/documentation" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2">Documentation</Link>
                      </li>
                      <li>
                        <Link to="/support" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2">Support center</Link>
                      </li>
                      <li>
                        <Link to="/404" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2">404</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </Transition>
            </div>

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
