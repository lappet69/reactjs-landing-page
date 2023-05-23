import { useEffect, useState } from "react";
import { MdMenu, MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "../assets/alba-logo.svg";

const menuItems = [
  { name: "service", path: "/#service" },
  { name: "about", path: "/#about" },
  { name: "portfolio", path: "/#portfolio" },
  { name: "blog", path: "/#blog" },
  { name: "career", path: "/#career" },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {}, [isOpen]);

  return (
    <header className="">
      {/* mobile */}
      <div className="w-full flex px-6 items-center md:hidden justify-between z-30 relative">
        <div className="flex justify-between w-full items-center">
          <Link to="/">
            <img src={Logo} alt="logo" className="w-3/4 md:w-auto" />
          </Link>
          <div className="relative ">
            {!isOpen ? (
              <MdMenu onClick={() => setIsOpen(true)} className="menuIcon" />
            ) : (
              <MdOutlineClose
                onClick={() => setIsOpen(false)}
                className="menuIcon "
              />
            )}
            {isOpen && (
              <ul className="flex absolute bg-white  flex-col items-center  gap-5 my-5 !w-screen -right-10 shadow-lg  transition ease-in-out duration-500 py-10 border-t">
                {menuItems &&
                  menuItems.map((menu, idx) => (
                    <Link to={menu.path} key={idx} className={`nav-link`}>
                      {menu.name}
                    </Link>
                  ))}
                <button className="rounded-full bg-primaryColor font-semibold px-6 py-3">
                  Contact Us
                </button>
              </ul>
            )}
            <div className="bg-red-400  "></div>
          </div>
        </div>
      </div>

      {/* desktop */}
      <div className="w-full hidden md:flex justify-between  md:px-12 lg:px-24">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <ul className=" flex  items-center  gap-5 ">
          {menuItems &&
            menuItems.map((menu, idx) => (
              <Link to={menu.path} key={idx} className={`nav-link`}>
                {menu.name}
              </Link>
            ))}
          <button className="rounded-full bg-primaryColor font-semibold px-6 py-3">
            Contact Us
          </button>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
