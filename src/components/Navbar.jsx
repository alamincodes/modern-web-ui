import React from "react";
import GradientBtn from "./GradientBtn";
import { FaBars, FaTimes } from "react-icons/fa";
export const Navbar = ({ isMenuShown, setIsMenuShown }) => {
  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "products" },
    { id: 3, link: "developer API" },
    { id: 4, link: "customers" },
    { id: 5, link: "contact" },
  ];
  return (
    <>
      {/* web nav */}
      <div className=" w-full h-24 bg-black text-white z-20 fixed">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4 h-full">
          <div>
            <h1 className="text-thBlue text-3xl tracking-widest">ANTON</h1>
          </div>
          <div className="hidden lg:flex items-center">
            <ul className="flex">
              {links.map(({ link, id }) => (
                <li
                  key={id}
                  className="p-4 hover:text-thBlue duration-200 uppercase cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
            <GradientBtn title="get anton" className="capitalize" />
          </div>
          <div
            className="block lg:hidden cursor-pointer"
            onClick={() => setIsMenuShown(!isMenuShown)}
          >
            {isMenuShown ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </div>
      {/* phone  nav*/}
      <div
        className={`w-full absolute bg-gray-700 z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
          isMenuShown ? "top-24 rounded-b-2xl opacity-95" : "top-[-100%]"
        }`}
      >
        <ul>
          {links.map(({ link, id }) => (
            <li key={id} className="p-2">
              {link}
            </li>
          ))}
          <GradientBtn title="get anton" className="mt-10 capitalize" />
        </ul>
      </div>
    </>
  );
};
