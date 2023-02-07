import React from "react";
import styles from "./NavBar.module.css";
import logoImage from "../../images/MSP LOGO WHITE.png";
import { useNavigate } from "react-router";
import Loading from "../Helper/LoadingSpinner/Loading";
import { Fragment } from "react";

const NavBar = () => {
  const nav = useNavigate();

  const goHomePage = () => {
    nav("/");
  }
  const goOldEventsPage = () => {
    nav("/oldEvents");
  }
  const goAboutUs = () => {
    nav("/aboutUs");
  }
  const goAdmin = () => {
    nav("/admin");
  }
  return (
    <Fragment>
      <nav>
        <div className={styles.logo}>
          <img src={logoImage} alt="" />
        </div>
        <ul className={styles.navegation}>
          <li onClick={goHomePage}>Home</li>
          <li onClick={goOldEventsPage}>Events</li>
          <li onClick={goAboutUs}>About Us</li>
        </ul>
        {/* 
        <div>
          <button onClick={goAdmin}>Login</button>
        </div>
        */}
      </nav>
      <Loading />
    </Fragment>
  );
};

export default NavBar;
