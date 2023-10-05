import React from "react";
import "./style.css";

export const Nike = (): JSX.Element => {
  return (
    <div className="nike">
      <div className="div">
        <div className={`nav nav-instance`}>
          <svg className="logo" width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path className="logo-path" d="M32 10.4001L8.58933 20.3681C6.648 21.1894 5.01733 21.6014 3.69866 21.6014C2.20533 21.6014 1.12133 21.0787 0.449329 20.0321C0.0266626 19.3601 -0.0973374 18.5081 0.0759959 17.4747C0.249329 16.4414 0.710663 15.3414 1.45733 14.1707C2.08 13.2241 3.1 11.9801 4.52 10.4374C4.03835 11.1956 3.68516 12.0281 3.47466 12.9014C3.10133 14.4947 3.43733 15.6641 4.48266 16.4107C4.98 16.7587 5.664 16.9334 6.536 16.9334C7.232 16.9334 8.016 16.8214 8.888 16.5974L32 10.4001Z" />
          </svg>
          <div className="nav-links">
            <div className="text-wrapper">New &amp; Featured</div>
            <div className="text-wrapper">Men</div>
            <div className="text-wrapper">Women</div>
            <div className="text-wrapper">Kids</div>
          </div>
          {/* <img className="nav-icon" alt="Menu Icon" src="/assets/cart.png" /> */}

          <svg className="nav-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path className="nav-icon-path" d="M2 4H3.30575C4.28342 4 5.1178 4.70683 5.27853 5.6712L5.5 7M5.5 7L6.72147 14.3288C6.8822 15.2932 7.71658 16 8.69425 16H16.8057C17.7834 16 18.6178 15.2932 18.7785 14.3288L19.8059 8.1644C19.9075 7.55487 19.4375 7 18.8195 7H5.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path className="nav-icon-path" d="M8.25 21.25C8.94036 21.25 9.5 20.6904 9.5 20C9.5 19.3096 8.94036 18.75 8.25 18.75C7.55964 18.75 7 19.3096 7 20C7 20.6904 7.55964 21.25 8.25 21.25ZM17.25 21.25C17.9404 21.25 18.5 20.6904 18.5 20C18.5 19.3096 17.9404 18.75 17.25 18.75C16.5596 18.75 16 19.3096 16 20C16 20.6904 16.5596 21.25 17.25 21.25Z" fill="black" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div className={`media media-instance`}>
          <img className="media-img" src="/assets/shoe.png" alt="Shoe Image" />
          <div className="MERCURIAL-XXV">
            MERCURIAL
            <br />
            XXV
          </div>
        </div>
      </div>
    </div>
  );
};
