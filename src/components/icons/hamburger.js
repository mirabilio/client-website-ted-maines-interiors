import React from "react";

const Hamburger = ({ fill }) => (
  <svg
    viewBox="0 0 22 20"
    xmlns="http://www.w3.org/2000/svg"
    id="hamburger"
    focusable="false"
  >
    <line
      id="hbLine1"
      className="hbLine1"
      x1="0"
      x2="22"
      y1="4"
      y2="4"
      stroke="black"
      strokeWidth="2px"
      strokeLinecap="square"
    />
    <line
      id="hbLine2"
      className="hbLine2"
      x1="0"
      x2="22"
      y1="10"
      y2="10"
      stroke="black"
      strokeWidth="2px"
      strokeLinecap="square"
    />
    <line
      id="hbLine3"
      className="hbLine3"
      x1="0"
      x2="22"
      y1="16"
      y2="16"
      stroke="black"
      strokeWidth="2px"
      strokeLinecap="square"
    />
  </svg>
);

export default Hamburger;
