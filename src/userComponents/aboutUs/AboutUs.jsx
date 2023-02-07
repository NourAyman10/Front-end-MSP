import React, { Fragment } from "react";
import aboutUsStyles from "./AboutUs.module.css";
import sideIMG from "../../images/aboutUs/MSPlogo.svg";
import NavBar from "../navBar/NavBar";

const AboutUs = () => {
  return (
    <Fragment>
      <NavBar />
      <section className={aboutUsStyles.about}>
        <div className={aboutUsStyles.backgroundAboutUs}>
          <div className={aboutUsStyles.shape}></div>
          <div className={aboutUsStyles.shape}></div>
          <div className={aboutUsStyles.shape}></div>
        </div>
        <div className={aboutUsStyles.details}>
          <h4>About Us</h4>
          <h5>MSP Tech Club - ASU</h5>
          <p>
            Microsoft Student Partner Tech club at ASU is a non-profit student community program that promotes advanced technology through education, practice and innovation.
          </p>

          <p>
            The club first started at ASU in 2011, and to this day it continues to strive. Each season, MSP tries to establish new partnerships and come up with new ways to benefit students and offer opportunities for those who are willing to grab them.
          </p>

          <p>
            This season the club offers 14 different tracks through weekly sessions, camps, or internal competitions, to aid students with their university work and prepare them for life after graduation. The tracks include both technical and non-technical specializations to ensure that members balance between technical and soft skills. Wether you want to learn how to build an app, create artistic designs, or give public talks, MSP is your way to go. 
          </p>

          <p>
            However, since MSP’s slogan is “Knowledge Shared Is Knowledge Squared”, every once in a while, the club holds technical events and competitions where students from outside the club can participate in. So, see you at the next event!
          </p>
        </div>
        <div className={aboutUsStyles.miniIMG}>
          <img src={sideIMG} alt="msp-logo-image" className={aboutUsStyles.logoIMG} />
        </div>
      </section>
    </Fragment>
  );
};

export default AboutUs;
