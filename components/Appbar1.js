// import Link from 'next/link';
// import { useStore } from '../store/store';
import * as BsIcons from 'react-icons/bs';

const Appbar = () => {
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
    <header className="bg-blue-500 text-white shadow-md">
      <nav className="flex items-center justify-between px-4 py-2">
        <a href="/" className="hover:text-blue-100 transition-colors">
          {/* Nav Left, for brand */}
          <div className="flex items-center justify-between gap-2">
            <span>
              <BsIcons.BsBookmarkFill className="text-xl" />
            </span>
            <span className="font-bold font-mono text-xl">Dev Index</span>
          </div>
        </a>
        {/* Nav Middle, for search */}
        <div className="foo">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="search..."
            className="px-2 truncate rounded-sm bg-blue-50"
          />
        </div>
        {/* Nav Right, for menu */}
        <div className="foo">menu</div>
      </nav>
    </header>
  );
};

export default Appbar;
