/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const FilledOnStroke2Radius3JoinRound1 = ({ color = "black", className }) => {
  return (
    <svg
      className={`filled-on-stroke-2-radius-3-join-round-1 ${className}`}
      fill="none"
      height="12"
      viewBox="0 0 12 12"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M10.4537 3.10278C10.7397 2.14927 9.8507 1.26025 8.89719 1.54631L1.4344 3.78515C0.238471 4.14392 0.249624 5.84132 1.45018 6.18433L4.71199 7.11628C4.79504 7.14001 4.85996 7.20493 4.88369 7.28798L5.81563 10.5498C6.15865 11.7503 7.85604 11.7615 8.21482 10.5656L10.4537 3.10278Z"
        fill={color}
      />
    </svg>
  );
};

FilledOnStroke2Radius3JoinRound1.propTypes = {
  color: PropTypes.string,
};
