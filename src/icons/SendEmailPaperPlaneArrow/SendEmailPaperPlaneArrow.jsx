/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const SendEmailPaperPlaneArrow = ({ color = "white", className }) => {
  return (
    <svg
      className={`send-email-paper-plane-arrow ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M20.9074 6.20555C21.4795 4.29854 19.7015 2.52051 17.7944 3.09261L2.86886 7.57029C0.477003 8.28785 0.49931 11.6826 2.90042 12.3687L9.42404 14.2326C9.59014 14.28 9.71998 14.4099 9.76744 14.576L11.6313 21.0996C12.3174 23.5007 15.7121 23.523 16.4297 21.1311L20.9074 6.20555Z"
        fill={color}
      />
    </svg>
  );
};

SendEmailPaperPlaneArrow.propTypes = {
  color: PropTypes.string,
};
