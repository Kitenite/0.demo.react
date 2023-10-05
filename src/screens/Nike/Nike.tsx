import React from "react";
import { Media } from "../../components/Media";
import { Nav } from "../../components/Nav";
import "./style.css";

export const Nike = (): JSX.Element => {
  return (
    <div className="nike">
      <div className="div">
        <Nav className="nav-instance" />
        <Media className="media-instance" />
      </div>
    </div>
  );
};
