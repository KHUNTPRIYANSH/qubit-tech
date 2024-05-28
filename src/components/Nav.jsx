import React from "react";
import "../styles/Nav.css";
import { IconButton } from '@mui/material';
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import MenuIcon from "@mui/icons-material/Menu";

const Nav = ({ onMenuClick }) => {const handleMenuClick = () => {
    document.querySelector('.hidden-nav').classList.add('visible');
  };
  return (
    <header id="main-nav">
      <nav>
        <img src="/imgs/3.png" id="llg" alt="" />
        <div className="cls">
          <IconButton onClick={onMenuClick}>
            <MenuIcon className="ham" />
          </IconButton>
        </div>
        <div className="nv-left">
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#service">services</a>
          <a href="#tec">projects</a>
          <a href="#contact">contact</a>
        </div>
        <div className="nv-right">
          <a href="https://www.instagram.com/_qubit.tech/" target="_blank">
            <InstagramIcon />
          </a>
          <a href="https://www.linkedin.com/company/qubit-info" target="_blank">
            <LinkedInIcon />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=CrpPbDzHNDghcrCkVKTtJDrFcvRqPXDMLVMgSLPngxkRqLhmkNKlXpRjDGHRgxQHGfrFbSWxsFSvZVJKdWKg"
            target="_blank"
          >
            <AlternateEmailIcon />
          </a>
          {/* <TwitterIcon /> */}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
