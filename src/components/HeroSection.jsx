import React, { useRef, useState } from "react";
import heroVideo from "../assets/heroVideo.mp4";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import GradientBtn from "./GradientBtn";

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
    <div className="flex items-end justify-center w-full h-screen text-center ">
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
        <h1 className="text-5xl lg:text-7xl">web 3.0 </h1>
        <h1 className="text-5xl lg:text-7xl capitalize mb-12">
          The <span className="text-thBlue">Feature</span> is here
        </h1>
        <div className="flex flex-row justify-center items-center ">
          <GradientBtn title="get anton" className="capitalize" />
          <GradientBtn title="get products" className="capitalize mx-12" />
          {isVideoPlaying ? (
            <FaPauseCircle
              onClick={handleVideoPause}
              className="text-thBlue duration-200 hover:scale-110 cursor-pointer"
              size={30}
            />
          ) : (
            <FaPlayCircle
              onClick={handleVideoPlay}
              className="text-thBlue duration-200 hover:scale-110 cursor-pointer"
              size={30}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
