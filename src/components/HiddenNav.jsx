import React from "react";
// import "../styles/HiddenNav.css";
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const HiddenNav = ({ isVisible, onCloseClick }) => { const handleCloseClick = () => {
    document.querySelector('.hidden-nav').classList.remove('visible');
  };
  return (
    <div className={`hidden-nav ${isVisible ? 'visible' : ''}`}>
      <div className="cls">
        <IconButton onClick={onCloseClick}>
          <CloseIcon />
        </IconButton>
      </div>
      <div className="hid-link">
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#service">services</a>
        <a href="#tec">projects</a>
        <a href="#contact">contact</a>
      </div>
      <div className="hid-ico">
        <IconButton>
          <a href="https://www.instagram.com/_qubit.tech/" target="_blank">
            <InstagramIcon />
          </a>
        </IconButton>
        <IconButton>
          <a href="https://www.linkedin.com/company/qubit-info" target="_blank">
            <LinkedInIcon />
          </a>
        </IconButton>
        <IconButton>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=CrpPbDzHNDghcrCkVKTtJDrFcvRqPXDMLVMgSLPngxkRqLhmkNKlXpRjDGHRgxQHGfrFbSWxsFSvZVJKdWKg"
            target="_blank"
          >
            <AlternateEmailIcon />
          </a>
        </IconButton>
        {/* <TwitterIcon /> */}
      </div>
    </div>
  );
};

export default HiddenNav;
