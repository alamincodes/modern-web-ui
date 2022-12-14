import React from "react";
import GradientBtn from "./GradientBtn";
import { HiMenuAlt3, HiOutlinePlus } from "react-icons/hi";
import { Link } from "react-scroll";
export const Navbar = ({ isMenuShown, setIsMenuShown }) => {
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "products",
    },
    {
      id: 3,
      link: "developer API",
    },
    {
      id: 4,
      link: "customers",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <>
      <div className="fixed w-full h-24 bg-black/80 backdrop-blur-2xl text-white z-20">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4 h-full">
          <div>
            <Link to="home" smooth duration={500}>
              <h1 className="text-thBlue tracking-widest cursor-pointer text-3xl font-bold">
                ANTON
              </h1>
            </Link>
          </div>

          <div className="hidden lg:flex items-center">
            <ul className="flex">
              {links.map(({ id, link }) => (
                <Link to={link} smooth duration={500}>
                  <li
                    key={id}
                    className="p-4 uppercase duration-200 hover:text-thBlue cursor-pointer text-sm"
                  >
                    {link}
                  </li>
                </Link>
              ))}
            </ul>
            <Link to="developer API" smooth duration={500}>
              <GradientBtn className="ml-4 capitalize" title="get anton" />
            </Link>
          </div>

          <div
            onClick={() => setIsMenuShown(!isMenuShown)}
            className="block lg:hidden cursor-pointer"
          >
            {isMenuShown ? (
              <HiOutlinePlus className=" rotate-45" size={30} />
            ) : (
              <HiMenuAlt3 size={30} />
            )}
          </div>
        </div>
      </div>

      <div
        className={`w-full bg-black/80 backdrop-blur-2xl text-white fixed z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
          isMenuShown ? "top-24 opacity-95" : "top-[-100%]"
        }`}
      >
        <ul>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="p-4 uppercase cursor-pointer text-sm duration-300 hover:text-thBlue"
            >
              <Link
                onClick={() => setIsMenuShown(false)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
          <GradientBtn className="mt-10 capitalize text-sm" title="get anton" />
        </ul>
      </div>
    </>
  );
};
