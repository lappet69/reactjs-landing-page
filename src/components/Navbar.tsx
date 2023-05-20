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
          <img src={Logo} alt="logo" />
          <div className="relative  ">
            {!isOpen ? (
              <MdMenu onClick={() => setIsOpen(true)} className="menuIcon" />
            ) : (
              <MdOutlineClose
                onClick={() => setIsOpen(false)}
                className="menuIcon "
              />
            )}
            <div className="absolute   w-screen -right-[2.5rem]  top-[70px] bg-white shadow-lg border-t transition-all ease-in-out duration-500">
              {isOpen && (
                <ul className="flex flex-col items-center  gap-5 my-8">
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
            </div>
          </div>
        </div>
      </div>

      {/* desktop */}
      <div className="w-full hidden md:flex justify-between  md:px-12 lg:px-24">
        <img src={Logo} alt="logo" />
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
