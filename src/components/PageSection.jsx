import React from "react";

const PageSection = ({ name, title, subtitle, children }) => {
  return (
    <div name={name} className="max-w-screen-xl mx-auto h-fit ">
      <div className="my-32 mx-8 text-center lg:text-left">
        <h1 className="lg:text-5xl text-3xl capitalize">{title}</h1>
        <p className="mt-4 mb-16 text-sm">{subtitle}</p>
        {children}
      </div>
    </div>
  );
};

export default PageSection;
