import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ComingEvent.module.css";
import facebookIcon from "../../images/icons/facebookIcon.svg";
import linkedInIcon from "../../images/icons/linkedInIcon.svg";
import cursorIcon from "../../images/icons/cursorIcon.svg";
import ComingEventData from "../../context/ComingEventData";
import {helperFN} from "../Helper/functions/helperFunctions.js";
import LatestEvent from "../../context/LatestEvent";

const ComingEvent = () => {
  const [EventData] = ComingEventData();
  const nav = useNavigate();
  const [latestEvent] = LatestEvent()

  const goEventMoreDetailes = (id) => {
    nav("/moreDetailes/" + id);
  }

  const goRegisterEventPage = (id) => {
    nav("/registerEvent/"+id);
  }

  const oldEvent = ()=>{
    return (
      <section>
        <span className={styles.ERR}> Seems that there is no coming event for now, Please keep up</span>
        <h1>{latestEvent.Name}</h1>
        <p className={styles.brif}>
          {latestEvent.BriefDesc} 
        </p>
        <p className={styles.date}>{helperFN.formatDate(latestEvent.Date)}</p>
        <div className={styles.buttons}>
          {EventData.isVisible && <button type="button" onClick={()=>{goEventMoreDetailes(latestEvent.ID)}}>More Details</button>}
        </div>
      </section>
    )
  }

  const comingEvent = ()=>{
    return (
      <div>
        <p className={styles.headline}>Upcoming Event</p>
        <h1>{EventData.Name}</h1>
        <p className={styles.brif}>
          {EventData.BriefDesc} 
        </p>
        <p className={styles.date}>{helperFN.formatDate(EventData.Date)}</p>
        <div className={styles.buttons}>
          {!EventData.IsCompleted && EventData.isVisible && <button type="button" onClick={()=>{goRegisterEventPage(EventData.ID)}}>Register Now</button>}
          {EventData.isVisible && <button type="button" onClick={()=>{goEventMoreDetailes(EventData.ID)}}>More Details</button>}
        </div>
      </div>
    )
  }

  return (
    <Fragment>
      <div className={styles.comingEventContainer}>
        <main>
          <div className={styles.logoNeon}></div>
          <div className={styles.background}>
            <div className={styles.shape}></div>
            <div className={styles.shape}></div>
            <div className={styles.shape}></div>
          </div>

          {EventData.Name == "" ? oldEvent() : comingEvent()}
        </main>
        <div className={styles.scroll}>
          <img src={cursorIcon} alt="scroll-icone" />
          <p>Scroll to Explore</p>
        </div>
        <div className={styles.icons}>
          <a href="https://www.facebook.com/ASUTC" target="_blank">
            <img src={facebookIcon} alt="facebook-icon" />
          </a>
          <a href="https://www.linkedin.com/company/msp-tech-club-asu-22/mycompany/" target="_blank">
            <img src={linkedInIcon} alt="linkedIn-icon" />
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default ComingEvent;
