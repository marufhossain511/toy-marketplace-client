import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
const Footer = () => {
    return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 lg:w-1/6 pr-4 mb-6 md:mb-0">
            <img src="https://img.freepik.com/free-psd/3d-puzzle-pieces_23-2148938940.jpg?w=740&t=st=1684339483~exp=1684340083~hmac=5bdcd149aa80aa5d4ec329d36835fa569a1caa1742706050684c1e6fae4707de" alt="Logo" className="h-10" />
            <p className="mt-2">Your website description goes here.</p>
          </div>
          <div className="w-full md:w-1/4 md:text-center lg:w-2/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p>123 Main St</p>
            <p>City, State ZIP</p>
            <p>Email: info@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/6 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/6 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Links</h3>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">About</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Services</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 text-center pt-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} ToyMan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    );
};

export default Footer;