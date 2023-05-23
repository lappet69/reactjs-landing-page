import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { Link } from "react-router-dom";
import { Logo } from "../assets";

const Footer = () => {
  return (
    <footer className="flex  flex-col p-6 lg:px-32">
      <div className="w-full flex flex-col lg:flex-row lg:justify-between  text-center lg:text-left py-16 border-b border-b-1 border-t border-t-1 ">
        <div className="flex flex-col lg:max-w-md justify-center lg:justify-start items-center lg:items-start text-center md:text-left">
          <img src={Logo} alt="" className="w-32" />
          <p className="mt-7 flex flex-wrap">
            Albatech acts as a corporate partner to help digitize their business
            to accelerate trends in remote work.
          </p>
          <div className="flex gap-4 text-xl text-gray-400 md:mt-12">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
        <div className="flex flex-col  gap-7 my-6 lg:my-0">
          <p className="font-bold  text-xl">Website</p>
          <p>About</p>
          <p>Service</p>
          <p>Portfolio</p>
          <p>Blog</p>
          <p>Career</p>
        </div>
        <div className="flex flex-col  gap-7">
          <p className="font-bold text-xl">Contact</p>
          <div className="flex flex-col gap-5">
            <p>
              The Prominence Blok 38D No.25 <br />
              Jl. Jalur Sutera Barat, Alam Sutera, <br /> Kota Tangerang, Banten
              15143
            </p>
            <Link to="https://wa.me/+628118893383" target="_blank">
              <strong>P:</strong> +62 81 1889 3383
            </Link>
            <Link to="mailto:info@albatech.id" target="_blank">
              <strong>E: </strong> info@albatech.id
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between  mt-4 pb-8 md:px-24">
        <p className="text-xs text-gray-400">
          &copy;PT. Alba Digital Teknologi 2021 | All Right Reserved
        </p>
        <p className="text-xs text-gray-400">
          Privacy policy | Term of service
        </p>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center fixed bottom-4 right-6">
        <Link
          to="https://api.whatsapp.com/send?phone=628118893383"
          target="_blank"
          className="bg-[#25D366] w-16 h-16 rounded-full flex justify-center relative"
        >
          <span className="h-full w-full bg-[#25D366] rounded-full animate-wiggle absolute"></span>
          <SiWhatsapp className="text-white text-4xl self-center absolute" />
        </Link>
        <p className="text-center">Need Help ?</p>
      </div>
    </footer>
  );
};

export default Footer;
