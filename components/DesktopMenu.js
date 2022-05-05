import * as IoIcons from 'react-icons/io5';
import * as HiIcons from 'react-icons/hi';
import Link from 'next/link';

const DesktopMenu = () => {
  return (
    <div className="hidden items-center justify-between gap-4 _show-on-md">
      <Link href="/" passHref>
        <a
          className="flex space-x-2 place-items-center hover:text-blue-100 transition-colors"
          target="_blank"
        >
          {/* <span>
            <HiIcons.HiHome />
          </span> */}
          <span>Home</span>
        </a>
      </Link>
      <Link href="mailto:hssnkizz@gmail.com" passHref>
        <a
          className="flex space-x-2 place-items-center hover:text-blue-100 transition-colors"
          target="_blank"
        >
          {/* <span>
            <HiIcons.HiMail />
          </span> */}
          <span>Contact Us</span>
        </a>
      </Link>
      <Link href="https://twitter.com/HusseinKizz" passHref>
        <a
          className="flex space-x-2 place-items-center hover:text-blue-100 transition-colors"
          target="_blank"
        >
          {/* <span>
            <IoIcons.IoLogoTwitter />
          </span> */}
          <span>Follow Creator</span>
        </a>
      </Link>
      <Link href="https://github.com/Hussseinkizz/Dev-Index" passHref>
        <a
          className="flex space-x-2 place-items-center text-blue-50 py-1 px-2 rounded-md bg-gradient-to-r from-blue-300 via-blue-300 to-blue-400 hover:text-blue-100 active:scale-110 transition duration-150 ease-in-out"
          target="_blank"
        >
          <span>
            <IoIcons.IoLogoGithub />
          </span>
          <span>Star On Github</span>
        </a>
      </Link>
    </div>
  );
};

export default DesktopMenu;
