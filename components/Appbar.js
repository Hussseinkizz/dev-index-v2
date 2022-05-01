// import Link from 'next/link';
// import { useStore } from '../store/store';
import * as BsIcons from 'react-icons/bs';
import * as HiIcons from 'react-icons/hi';
import Menu from '../components/Menu';
import DesktopMenu from './DesktopMenu';

const Appbar = ({ toggleNav, closeNav, navState }) => {
  // const {
  //   state: { darkMode },
  //   dispatch,
  // } = useStore();

  // const darkModeChangeHandler = () => {
  //   dispatch({
  //     type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON',
  //   });
  //   // use js-cookie package to persist darkmode value in browser after refresh, yarn add js-cookie and uncomment the codeblocks below!
  //   // const newDarkMode = !darkMode;
  //   // Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
  // };

  return (
    <header className="bg-blue-500 text-white shadow-md w-full _fixed-on-mobile">
      <nav className="flex items-center justify-between px-4 py-2 ">
        <a href="/" className="hover:text-blue-100 transition-colors">
          {/* Nav Left, for brand */}
          <div className="flex items-center justify-between gap-2">
            <span>
              <BsIcons.BsBookmarkFill className="text-xl" />
            </span>
            <div className="font-bold font-mono text-xl">
              Dev Index{' '}
              <span className="text-blue-300 bg-blue-400 px-1 rounded">v2</span>
            </div>
          </div>
        </a>
        {/* Nav Middle, for search */}
        {/* <div className="foo">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="search..."
            className="px-2 truncate rounded-sm bg-blue-50 text-gray-400 outline-none"
          />
        </div> */}
        {/* Nav Right, for menu */}
        <div className="relative">
          <button
            type="button"
            className="inline-flex items-center p-1 text-white text-sm hover:text-blue-500 transition-colors rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={toggleNav}
          >
            <span className="sr-only">Open main menu</span>
            {navState ? (
              <HiIcons.HiX className="w-6 h-6 icon" />
            ) : (
              <HiIcons.HiOutlineMenuAlt4 className="w-6 h-6 icon" />
            )}
          </button>
          {/* Menu, For Non Mobile */}
          <DesktopMenu />
        </div>
      </nav>
      {navState && <Menu onSelect={closeNav} />}
    </header>
  );
};

export default Appbar;
