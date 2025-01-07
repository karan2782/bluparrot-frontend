import React from "react";

function ContentPage() {
  return (
    <div className="bg-[url('/content.jpg')] bg-cover bg-center bg-no-repeat py-[100px] px-8 lg:px-0 ">
      <div className="lg:w-[815px] m-auto  text-[#ffffff] text-center">
        <p className="text-[14px]  ">Free Sample</p>
        <h2 className="lg:text-[58px] text-[20px] my-[28px]">
          Powerful Generator and Free Figma Sources{" "}
        </h2>
        <p className="lg:text-[18px] text-[12px]">
          Startup Framework contains components and complex blocks which can
          easily be integrated into almost any design. All of the components are
          made in the same style, and can easily be integrated into projects,
          allowing you to create hundreds of solutions.
        </p>
      </div>
    </div>
  );
}

export default ContentPage;
