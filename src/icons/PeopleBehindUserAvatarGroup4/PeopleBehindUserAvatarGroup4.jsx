/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const PeopleBehindUserAvatarGroup4 = ({ opacity = "unset", className }) => {
  return (
    <svg
      className={`people-behind-user-avatar-group-4 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M11.6464 14.3536C11.8417 14.5488 12.1583 14.5488 12.3536 14.3536L16.3536 10.3536C16.5488 10.1583 16.5488 9.84171 16.3536 9.64645C16.1583 9.45118 15.8417 9.45118 15.6464 9.64645L12 13.2929L8.35355 9.64645C8.15829 9.45118 7.84171 9.45118 7.64645 9.64645C7.45118 9.84171 7.45118 10.1583 7.64645 10.3536L11.6464 14.3536Z"
        fill="black"
        fillOpacity={opacity}
        fillRule="evenodd"
      />
    </svg>
  );
};

PeopleBehindUserAvatarGroup4.propTypes = {
  opacity: PropTypes.string,
};
