import React from "react";

function LowerFooter() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center md:justify-start gap-4">
        <p>Tour</p>
        <p>Features</p>
        <p>Pricing Plans</p>
        <p>Our Works</p>
        <p>Contacts</p>
      </div>

      {/* Copyright Information */}
      <div className="text-center md:text-left">
        © 2017 Designmodo. All rights reserved.
      </div>
    </div>
  );
}

export default LowerFooter;
