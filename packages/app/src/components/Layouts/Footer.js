import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <footer className="bg-primary w-full p-8 text-white flex items-center justify-center">
      <div className="max-w-4xl w-full flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-between text-sm">
        <div className="w-1/2 lg:w-1/6">
          <img
            alt="carelulu-logo"
            src="https://c2zyebdn.cloudimg.io/s/cdn/x/https://divin2sy6ce0b.cloudfront.net/images/carelulu_logo_square_white.png"
          />
        </div>
        <div className="space-y-2 hidden lg:block">
          <h4 className="font-bold uppercase">For Parents</h4>
          <ul className="list-none hidden lg:block">
            <li>
              <a href="https://carelulu.com">Parent Resources</a>
            </li>
            <li>
              <a href="https://carelulu.com">How It Works</a>
            </li>
            <li>
              <a href="https://carelulu.com">Testimonials</a>
            </li>
            <li>
              <a href="https://carelulu.com">Terms of Use</a>
            </li>
            <li>
              <a href="https://carelulu.com">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="space-y-2 hidden lg:block">
          <h4 className="font-bold uppercase">For Providers</h4>
          <ul className="list-none hidden lg:block">
            <li>
              <a href="https://carelulu.com">Provider Resources</a>
            </li>
            <li>
              <a href="https://carelulu.com">How it works</a>
            </li>
            <li>
              <a href="https://carelulu.com">Testimonials</a>
            </li>
            <li>
              <a href="https://carelulu.com">Terms and Conditions</a>
            </li>
            <li>
              <a href="https://carelulu.com">List Your Program</a>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-bold uppercase hidden lg:block">More</h4>
          <ul className="list-none flex lg:block space-x-2 lg:space-x-0">
            <li>
              <a href="https://carelulu.com">About Us</a>
            </li>
            <li>
              <a href="https://carelulu.com">Press</a>
            </li>
            <li>
              <a href="https://carelulu.com">Jobs</a>
            </li>
            <li>
              <a href="https://carelulu.com">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="py-2 block lg:hidden">
          <ul className="list-none flex space-x-2 items-center justify-between">
            <li>
              <a href="https://carelulu.com">Parent Resources</a>
            </li>
            <li>
              <a href="https://carelulu.com">Provider Resources</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col py-4 space-y-4">
          <div className="flex items-center justify-between space-x-2">
            <a
              className="text-white bg-transparent border-white border-2 rounded-full p-0 w-10 h-10 text-xl flex items-center justify-center"
              href="https://carelulu.com"
            >
              <FontAwesomeIcon icon={['fab', 'facebook-f']} />
            </a>
            <a
              className="text-white bg-transparent border-white border-2 rounded-full p-0 w-10 h-10 text-xl flex items-center justify-center"
              href="https://carelulu.com"
            >
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
            <a
              className="text-white bg-transparent border-white border-2 rounded-full p-0 w-10 h-10 text-xl flex items-center justify-center"
              href="https://carelulu.com"
            >
              <FontAwesomeIcon icon={['fab', 'instagram']} />
            </a>
          </div>
          <button
            className="bg-white text-primary px-4 py-2 rounded-sm text-semibold"
            type="button"
          >
            Help Center
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
