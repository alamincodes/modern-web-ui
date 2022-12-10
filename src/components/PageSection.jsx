import React from "react";

const PageSection = ({ name, title, subtitle, children }) => {
  return (
    <div className="max-w-screen-xl lg:mx-auto  md:mx-4 mx-4 h-fit ">
      <h1 className="text-5xl text-center lg:text-left">{title}</h1>
      <p className="mt-8 mb-16">{subtitle}</p>
      {children}
    </div>
  );
};

export default PageSection;
