import React from "react";
import "./style.css";

interface Props {
  className: any;
}

export const Nav = ({ className }: Props): JSX.Element => {
  return (
    <div className={`nav ${className}`}>
      <img className="logo" alt="Logo" src="/assets/nike-logo.png" />
      <div className="nav-links">
        <div className="text-wrapper">New &amp; Featured</div>
        <div className="text-wrapper">Men</div>
        <div className="text-wrapper">Women</div>
        <div className="text-wrapper">Kids</div>
      </div>
      <img className="nav-icon" alt="Menu Icon" src="/assets/cart.png" />
    </div>
  );
};
