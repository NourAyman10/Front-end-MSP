import React, { Fragment } from "react";
import styles from "./OurCommittees.module.css";
import gameIcon from "../../images/ourCommittees/Game.svg";
import cloudIcon from "../../images/ourCommittees/Cloud.svg";
import androidIcon from "../../images/ourCommittees/Android.svg";
import cyberIcon from "../../images/ourCommittees/Cyber.svg";
import problemSolvingIcon from "../../images/ourCommittees/ProblemSolving.svg";
import machineIcon from "../../images/ourCommittees/Machine.svg";
import UIIcon from "../../images/ourCommittees/UI.svg";
import dataIcon from "../../images/ourCommittees/Data.svg";
import testingIcon from "../../images/ourCommittees/Testing.svg";
import PRIcon from "../../images/ourCommittees/PR.svg";
import HRIcon from "../../images/ourCommittees/HR.svg";
import flutterIcon from "../../images/ourCommittees/Flutter.svg";
import webIcon from "../../images/ourCommittees/Web.svg";
import mediaIcon from "../../images/ourCommittees/Media.svg";

import * as Icon from "react-bootstrap-icons";

const OurCommittees = () => {
  const data = [{
    imageIcon: gameIcon,
    committeeName: "Game Development",
    alt: "Game-Development-photo"
  },{
    imageIcon: cloudIcon,
    committeeName: "Cloud Computing",
    alt: "Cloud-Computing-photo"
  },{
    imageIcon: androidIcon,
    committeeName: "Android Development",
    alt: "Android-Development-photo"
  },{
    imageIcon: cyberIcon,
    committeeName: "Cyber Security",
    alt: "Cyber-Security-photo"
  },{
    imageIcon: problemSolvingIcon,
    committeeName: "Problem Solving",
    alt: "Problem-Solving-photo"
  },{
    imageIcon: machineIcon,
    committeeName: "Machine Learning",
    alt: "Machine-Learning-photo"
  },{
    imageIcon: UIIcon,
    committeeName: "UI/UX",
    alt: "UI/UX-photo"
  },{
    imageIcon: dataIcon,
    committeeName: "Data Science",
    alt: "Data-Science-photo"
  },{
    imageIcon: testingIcon,
    committeeName: "Software Testing",
    alt: "Software-Testing-photo"
  },{
    imageIcon: PRIcon,
    committeeName: "Public Relations",
    alt: "Public-Relations-photo"
  },{
    imageIcon: HRIcon,
    committeeName: "Human Resources",
    alt: "Human-Resources-photo"
  },{
    imageIcon: flutterIcon,
    committeeName: "Flutter Development",
    alt: "Flutter-Development-photo"
  },{
    imageIcon: webIcon,
    committeeName: "Web Development",
    alt: "Web-Development-photo"
  },{
    imageIcon: mediaIcon,
    committeeName: "Social Media",
    alt: "Social-Media-photo"
  }]

  const slideLeft = () => {
    var cardWidth = document.querySelector("#sliderCard").offsetWidth;
    var slider = document.getElementById("slider");
    var movemantStep = cardWidth + 48;
    slider.scrollLeft = slider.scrollLeft - movemantStep ;

  }
  const slideRight = () => {
    var cardWidth = document.querySelector("#sliderCard").offsetWidth;
    var slider = document.getElementById("slider");
    var movemantStep = cardWidth + 48;
    slider.scrollLeft = slider.scrollLeft + movemantStep;
  }
  return (
    <Fragment>
      <div className={styles.container}>
        <h1>Our Committeess</h1>
        <div id="mainSliderContainer" className={styles.mainSliderContainer}>
          <Icon.ChevronLeft className={styles.leftSliderIcon} onClick={slideLeft} />
          <div id="slider" className={styles.slider}>{
            data.map((data, index)=> {
              return(
                <dir className={styles.sliderCard} key={index} id="sliderCard">
                  <img src={`${data.imageIcon}`} alt={`${data.alt}`} />
                  <p>{`${data.committeeName}`}</p>
                </dir>
              );
            })
          }
          </div>
          <Icon.ChevronRight className={styles.rightSliderIcon} onClick={slideRight} />
        </div>
      </div>
    </Fragment>
  );
};

export default OurCommittees;
