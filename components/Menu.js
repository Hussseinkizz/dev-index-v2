import * as IoIcons from 'react-icons/io5';
import * as HiIcons from 'react-icons/hi';
import Fade from 'react-reveal/Fade';
import Link from 'next/Link';

const Menu = ({ onSelect }) => {
  return (
    <>
      <Fade right>
        <div className="fixed z-50 px-2 py-4 bg-blue-500 text-white rounded right-2 top-14 text-base md:hidden shadow-lg">
          <Link href="/" onClick={onSelect} passHref>
            <a
              className="flex space-x-2 place-items-center hover:bg-blue-400 hover:text-blue-50 transition-colors p-1 rounded-md"
              target="_blank"
            >
              <span>
                <HiIcons.HiHome />
              </span>
              <span>Home</span>
            </a>
          </Link>
          <Link href="mailto:hssnkizz@gmail.com" onClick={onSelect} passHref>
            <a
              className="flex space-x-2 place-items-center hover:bg-blue-400 hover:text-blue-50 transition-colors p-1 rounded-md"
              target="_blank"
            >
              <span>
                <HiIcons.HiMail />
              </span>
              <span>Contact Us</span>
            </a>
          </Link>
          <Link
            href="https://twitter.com/HusseinKizz"
            onClick={onSelect}
            passHref
          >
            <a
              className="flex space-x-2 place-items-center hover:bg-blue-400 hover:text-blue-50 transition-colors p-1 rounded-md"
              target="_blank"
            >
              <span>
                <IoIcons.IoLogoTwitter />
              </span>
              <span>Follow Creator</span>
            </a>
          </Link>
          {/* Divider */}
          <div className="w-full h-1 bg-blue-50 rounded-md my-2" />
          <Link
            href="https://github.com/Hussseinkizz/Dev-Index"
            onClick={onSelect}
            passHref
          >
            <a
              className="flex space-x-2 place-items-center text-blue-50 py-1 px-2 rounded-md bg-gradient-to-r from-blue-300 via-blue-300 to-blue-400 hover:text-blue-100 active:scale-95 transition duration-150 ease-in-out"
              target="_blank"
            >
              <span>
                <IoIcons.IoLogoGithub />
              </span>
              <span>Star On Github</span>
            </a>
          </Link>
        </div>
      </Fade>
    </>
  );
};

export default Menu;
