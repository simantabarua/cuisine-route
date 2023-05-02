import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" p-4 md:p-10 bg-base-200 font-medium flex flex-col md:flex-row justify-center md:justify-around text-center items-center mt-5 gap-5 leading-9">
      <div>
        <p className="text-2xl font-bold">Cuisine Route</p>
        <p>Providing reliable tech since 1992</p>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4 my-2 place-content-center">
            <a href="https://twitter.com">
              <FaTwitter className="w-6 h-6 fill-current text-gray-600 hover:text-primary-500" />
            </a>
            <a href="https://facebook.com">
              <FaFacebook className="w-6 h-6 fill-current text-gray-600 hover:text-primary-500" />
            </a>
            <a href="https://instagram.com">
              <FaInstagram className="w-6 h-6 fill-current text-gray-600 hover:text-primary-500" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Newsletter</span>
        <div className="form-control w-full md:w-80">
          <div className="md:relative">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-full md:pr-16"
            />
            <button className="btn btn-primary w-full md:w-24 md:absolute top-0 right-0 md:rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
