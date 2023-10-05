import React from "react";
import "./style.css";

interface Props {
  className: any;
}

export const Media = ({ className }: Props): JSX.Element => {
  return (
    <div className={`media ${className}`}>
      <div className="MERCURIAL-XXV">
        MERCURIAL
        <br />
        XXV
      </div>
    </div>
  );
};
