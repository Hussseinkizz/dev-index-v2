// import { useStore } from '../store/store';
import { useState } from 'react';
import Appbar from './Appbar';
// import Meta from './Meta';

const Layout = ({ children }) => {
  // const { state } = useStore();
  // const { darkMode } = state;
  const [showNav, setShowNav] = useState(false);

  const hideNav = () => {
    showNav && setShowNav(showNav === false);
  };

  return (
    <>
      {/* <Meta /> */}
      {/* The Header */}
      <Appbar
        toggleNav={() => setShowNav(!showNav)}
        closeNav={hideNav}
        navState={showNav}
      />

      {/* The View */}
      <main
        className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
        onClick={hideNav}
      >
        {children}
      </main>

      {/* The Footer */}
      <footer className="flex-col items-center justify-center text-center mb-2 border-gray-200 border-t bg-gray-50 py-4">
        <h4 className="text-gray-500">
          Made With 💖 By
          <a
            href="mailto:hssnkizz@gmail.com"
            className="text-blue-500 mx-1 hover:font-semibold"
          >
            Kizz
          </a>
        </h4>
        <h3>All rights reserved. &copy; Dev Index 2022.</h3>
      </footer>
    </>
  );
};

export default Layout;
