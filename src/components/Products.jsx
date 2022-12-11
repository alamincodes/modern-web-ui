import React from "react";
import PageSection from "./PageSection";
import { FaRocket, FaSatellite, FaRobot, FaMicrochip } from "react-icons/fa";
const Products = () => {
  const products = [
    {
      id: 1,
      icon: <FaRocket size={50}  />,
      title: "rocket manufacturing",
      subtitle:
        "Fact from with my the i, this shadows soul i mien was of bird, raven till mien before by of. The lordly one fancy me not and croaking smiling, but hear lamplight entrance tempest a name i, sitting gave name each the quoth my door his implore. I i nothing.",
    },
    {
      id: 2,
      icon: <FaMicrochip size={50} />,
      title: "advanced electronics",
      subtitle:
        "Fact from with my the i, this shadows soul i mien was of bird, raven till mien before by of. The lordly one fancy me not and croaking smiling, but hear lamplight entrance tempest a name i, sitting gave name each the quoth my door his implore. I i nothing.",
    },
    {
      id: 3,
      icon: <FaRobot size={50} />,
      title: "robotics",
      subtitle:
        "Fact from with my the i, this shadows soul i mien was of bird, raven till mien before by of. The lordly one fancy me not and croaking smiling, but hear lamplight entrance tempest a name i, sitting gave name each the quoth my door his implore. I i nothing.",
    },
    {
      id: 4,
      icon: <FaSatellite size={50} />,
      title: "payload to orbit",
      subtitle:
        "Fact from with my the i, this shadows soul i mien was of bird, raven till mien before by of. The lordly one fancy me not and croaking smiling, but hear lamplight entrance tempest a name i, sitting gave name each the quoth my door his implore. I i nothing.",
    },
  ];
  return (
    <PageSection
      name="products"
      title="products"
      subtitle={`Plainly lamplight whether evermore thereat tell, we or scarce bird spoken he whether on, sinking thy again sent what eyes tinkled his explore these. Within melancholy sad bird not respiterespite`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-flow-cols-2 gap-12 text-white">
        {products.map((product) => (
          <div
            key={product.id}
            className="group shadow-md shadow-thBlue bg-gray-900/70 backdrop-blur-2xl rounded-lg flex flex-col items-center justify-center p-8 hover:shadow-lg hover:shadow-thPurple"
          >
            {/* icon */}
            <div className="flex items-center justify-center duration-300 group-hover:scale-110">
              <div className=" bg-gray-500/20 text-thPurple backdrop-blur-2xl p-5 rounded-full m-4">
                {product.icon}
              </div>
            </div>
            {/* title and subtitle */}
            <h2 className="text-3xl lg:text-3xl mb-4 capitalize">{product.title}</h2>
            <p className=" text-justify text-[15px]">{product.subtitle}</p>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default Products;
