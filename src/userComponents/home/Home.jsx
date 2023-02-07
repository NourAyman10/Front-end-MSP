import React, { Fragment } from "react";
import styles from "./Home.module.css"
import * as Icon from "react-bootstrap-icons";
import sideIMG from "../../images/aboutUs/MSPlogo.svg";
import ComingEvent from "../comingEvent/ComingEvent";
import OurCommittees from "../ourCommittees/OurCommittees";
import NavBar from "./../navBar/NavBar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <NavBar />
      <ComingEvent />
      {/* start about us */}
      <section className={styles.about}>
        <div className={styles.backgroundAboutUs}>
          <div className={styles.shape}></div>
          <div className={styles.shape}></div>
          <div className={styles.shape}></div>
        </div>
        <div className={styles.details}>
          <h4>About Us</h4>
          <h5>MSP Tech Club - ASU</h5>
          <p>
            Microsoft Student Partner Tech Club at ASU is a non-profit student
            community program that promotes advanced technology through
            education, practice and innovation. It also provides students with
            both the needed technical and non-technical sessions which packs
            their lives with high level skills and supports their careers with
            opportunities.
          </p>
          <a
            className={styles.learnMore}
          >
            <span>Learn more</span>
            <Icon.ArrowRightShort className={styles.icon} onClick={()=>navigate("/aboutUs")} />
          </a>
        </div>
        <div className={styles.miniIMG}>
          <img src={sideIMG} alt="msp-logo" className={styles.logoIMG}/>
        </div>
      </section>
      {/* end about us */}
      <OurCommittees />
    </Fragment>
  );
};

export default Home;
