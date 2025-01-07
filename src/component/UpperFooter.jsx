import React from "react";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { FaGooglePlusG } from "react-icons/fa";

function UpperFooter() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Brand Name */}
        <h1 className="font-[700] text-[24px]">Startup 3</h1>

        {/* Links and Icons */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <p>Privacy Policy</p>
          <p>Terms</p>
          <p className="text-[18px]">
            <TiSocialFacebook />
          </p>
          <p className="text-[18px]">
            <TiSocialTwitter />
          </p>
          <p className="text-[18px]">
            <FaGooglePlusG />
          </p>
        </div>
      </div>
    </div>
  );
}

export default UpperFooter;
