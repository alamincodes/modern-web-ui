import React from "react";
import PageSection from "./PageSection";
import codeImage from "../assets/code.jpg";
const DevApi = () => {
  return (
    <div>
      <PageSection
        name="developer API"
        title="Developer API"
        subtitle="Angels that with clasp dreams nepenthe on this of is. Said and a my the."
      >
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          {/* left */}
          <div className="flex flex-col gap-4 w-full lg:w-1/2 p-8 bg-gray-900 rounded-lg">
            <p className="text-[14px]  lg:text-[18px]  text-left border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
              Whom madam songs faster get as followed sought many leave.
            </p>
            <p className="text-[14px] lg:text-[18px]  text-left border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
              Whom madam songs faster get as followed sought many leave.
            </p>
            <p className=" text-[14px]  lg:text-[18px] text-left border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
              Whom madam songs faster get as followed sought many leave.
            </p>
            <p className="  text-[14px]  lg:text-[18px] text-left border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
              Whom madam songs faster get as followed sought many leave.
            </p>
          </div>

          {/* right */}

          <div className="w-full lg:w-1/2 lg:rotate-6 hover:rotate-0 duration-300 ">
            <img src={codeImage} alt="code" className="shadow-lg hover:shadow-thPurple shadow-thBlue rounded-lg" />
          </div>
        </div>
      </PageSection>
    </div>
  );
};

export default DevApi;
