import React, { useState } from "react";
import Content from "./Content";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GiCircle, GiPlainCircle } from "react-icons/gi";

const sliderContent = [
  {
    subheading: "Startup 3",
    heading: "Forgot about code",
    content:
      "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding. ",
  },
  {
    subheading: "Startup 3",
    heading: "Forgot about code 2",
    content:
      "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding. ",
  },
  {
    subheading: "Startup 3",
    heading: "Forgot about code 3",
    content:
      "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding. ",
  },
  {
    subheading: "Startup 3",
    heading: "Forgot about code 4",
    content:
      "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding. ",
  },
  {
    subheading: "Startup 3",
    heading: "Forgot about code 5",
    content:
      "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding. ",
  },
];

function Slider() {
  const [current, setCurrent] = useState(0);

  const decCurrent = () => {
    setCurrent((prev) => {
      if (prev > 0) {
        return prev - 1;
      } else {
        return prev;
      }
    });
  };

  const incCurrent = () => {
    setCurrent((prev) => {
      if (prev < sliderContent.length - 1) {
        return prev + 1;
      } else {
        return prev;
      }
    });
  };

 

  return (
    <div className="mt-[136px] px-2">
      <div className=" flex justify-around">
        <button disabled={current===0} className="text-[#FFFFFF]" onClick={decCurrent}>
          <IoIosArrowBack />
        </button>

        <div>
          {sliderContent.map(
            (item, index) =>
              current === index && <Content key={index} item={item} />
          )}
        </div>

        <button  disabled={current===(sliderContent.length-1)} className="text-[#FFFFFF]" onClick={incCurrent}>
          <IoIosArrowForward />
        </button>
      </div>


      {/* dots */}
      <div className="w-[91px]  flex justify-evenly m-auto mt-[48px]">
        {sliderContent.map((item, index) => 
            <button className="text-[12px] text-[#FFFFFF]" key={index}>
              {current===index? <GiPlainCircle /> : <GiCircle/>}
            </button>
          
        )}
      </div>
    </div>
  );
}

export default Slider;
