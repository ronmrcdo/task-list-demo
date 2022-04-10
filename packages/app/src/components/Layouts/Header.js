import UserInfo from './UserInfo';
import { useUserQuery } from '../../graphql/user/query';

function Header() {
  const [user] = useUserQuery();

  return (
    <header className="bg-primary w-full px-8 py-1 flex items-center justify-center">
      <div className="w-full max-w-4xl flex items-center justify-between">
        <a href="https://carelulu.com">
          <img
            alt="logo"
            className="w-1/2"
            src="https://c2zyebdn.cloudimg.io/s/cdn/x/https://divin2sy6ce0b.cloudfront.net/images/2017-11-06/whiteLogo2-min.png"
          />
        </a>

        {user?.me ? (
          <UserInfo name={user.me.fullName} />
        ) : (
          <button
            className="bg-secondary text-white rounded-sm py-2 px-3 flex justify-between items-center"
            data-dropdown-toggle="dropdown"
            id="menu-dropdown"
            type="button"
          >
            Menu
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 9l-7 7-7-7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        )}
        <div
          className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
          id="dropdown"
        >
          <ul
            aria-labelledby="menu-dropdown"
            className="py-1 text-sm text-gray-700 dark:text-gray-200"
          >
            <li>
              <a
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                href="https://carelulu.com"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                href="https://carelulu.com"
              >
                Login
              </a>
            </li>
            <li>
              <a
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                href="https://carelulu.com"
              >
                Sign up
              </a>
            </li>
            <li>
              <a
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                href="https://carelulu.com"
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
