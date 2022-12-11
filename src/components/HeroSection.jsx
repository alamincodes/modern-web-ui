import React, { useRef, useState } from "react";
import heroVideo from "../assets/heroVideo.mp4";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import GradientBtn from "./GradientBtn";
import { Link } from "react-scroll";

const HeroSection = ({ isMenuShown }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef();
  const handleVideoPause = () => {
    videoRef.current.pause();
    setIsVideoPlaying(false);
  };
  const handleVideoPlay = () => {
    videoRef.current.play();
    setIsVideoPlaying(true);
  };
  return (
    <div
      name="home"
      className="flex items-end justify-center w-full h-screen text-center "
    >
      <video
        ref={videoRef}
        src={heroVideo}
        loop
        muted
        autoPlay
        className="object-cover -z-10 h-full absolute w-full"
      />
      {/* text */}
      <div
        className={`p-8 flex flex-col justify-center items-center duration-500 w-full ${
          isVideoPlaying ? "" : "bg-black/80"
        } ${isMenuShown ? "opacity-50" : "opacity-100"}`}
      >
        <h1 className="text-5xl lg:text-7xl font-bold">
          Web <span className="text-thOrange">3.0</span>{" "}
        </h1>
        <h1 className="text-3xl lg:text-7xl capitalize font-bold mb-8">
          The <span className="text-thBlue">Feature</span> is here
        </h1>
        {/* button */}
        <div className="flex flex-row justify-center items-center ">
          <Link to="developer API" smooth duration={500}>
            <GradientBtn
              title="get anton"
              className="capitalize text-sm lg:text-lg"
            />
          </Link>
          <Link to="products" smooth duration={500}>
            <GradientBtn
              title="get products"
              className="capitalize mx-2 text-sm lg:text-lg"
            />
          </Link>
          {isVideoPlaying ? (
            <FaPauseCircle
              onClick={handleVideoPause}
              className="text-thBlue duration-200 hover:scale-110 cursor-pointer"
              size={35}
            />
          ) : (
            <FaPlayCircle
              onClick={handleVideoPlay}
              className="text-thBlue duration-200 hover:scale-110 cursor-pointer"
              size={35}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
