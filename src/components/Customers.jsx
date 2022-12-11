import React from "react";
import PageSection from "./PageSection";
import {
  FaFacebook,
  FaGoogle,
  FaApple,
  FaAmazon,
  FaSnapchatGhost,
} from "react-icons/fa";
const Customers = () => {
  const facts = [
    {
      id: 1,
      title: "$49M",
      subtitle: "Was and broken pallas rustling thy.",
    },
    {
      id: 2,
      title: "57%",
      subtitle: "Much my quaint dream mortals of.",
    },
    {
      id: 3,
      title: "3 months later",
      subtitle: "Whose in from oer and a the is ghastly.",
    },
    {
      id: 4,
      title: "7 new countries",
      subtitle: "Door the beating door me unto that.",
    },
  ];

  const companies = [
    {
      id: 1,
      icon: <FaGoogle size={25} />,
      title: "google",
    },
    {
      id: 2,
      icon: <FaFacebook size={25} />,
      title: "facebook",
    },
    {
      id: 3,
      icon: <FaAmazon size={25} />,
      title: "amazon",
    },
    {
      id: 4,
      icon: <FaApple size={25} />,
      title: "apple",
    },
    {
      id: 5,
      icon: <FaSnapchatGhost size={25} />,
      title: "snapchat",
    },
  ];
  return (
    <div>
      <PageSection
        name="customers"
        title="Customers"
        subtitle="Angels that with clasp dreams nepenthe on this of is. Said and a my the."
      >
        <>
          <div className="grid lg:grid-cols-4 text-left gap-8 mb-16">
            {facts.map(({ id, title, subtitle }) => (
              <div
                key={id}
                className="even:bg-thBlue odd:bg-thOrange text-black rounded-lg p-4"
              >
                <h1 className="text-3xl font-bold mb-2">{title}</h1>
                <p>{subtitle}</p>
              </div>
            ))}
          </div>
          {/* icons */}
          <div className="flex flex-col lg:flex-row items-center justify-around gap-6">
            {companies.map(({ id, icon, title }) => (
              <div key={id} className="flex items-center capitalize p-4 rounded-lg">
                {icon}
                <p className="ml-2">{title}</p>
              </div>
            ))}
          </div>
        </>
      </PageSection>
    </div>
  );
};

export default Customers;
