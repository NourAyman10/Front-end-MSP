import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import OldEventsData from "../../context/OldEventsData";
import NavBar from "../navBar/NavBar";
import styles from "./OldEvents.module.css";
import Loading from "../Helper/LoadingSpinner/Loading";

const OldEvents = () => {

  const nav = useNavigate();
  const goComingEventMoreDetailes = (id) => {
    nav("/moreDetailes/" + id);
  }

  const [allEvents] = OldEventsData();

  const monthes = [
    "jun",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  const formatDate = (e) => {
    let year = e.substr(0, 4);
    let month = parseInt(e.substr(5, 2), 10);
    let day = e.substr(8, 2);

    return day + " " + monthes[month - 1] + ", " + year;
  };

  const addDottsToEnd = (data,e) => {
    if(data.length > e){
      return data.substr(0,e) + "...";
    }else{
      return data;
    }
  }

  return (
    <Fragment>
      <Loading />
      <NavBar />
      <ul className={styles.oldEventsContainer}>
        {allEvents.map((value, key) => (
          <li
            key={key}
            className={styles.singleEvent}
            onClick={()=>{goComingEventMoreDetailes(value.ID)}}
            style={{ backgroundImage: "url(" + process.env.REACT_APP_FETCH_IMG_URL + value.imagePath + ")" }}>

            <div className={styles.eventData}>
              <p className={styles.eventDate}>{formatDate(value.Date)}</p>
              <div className={styles.eventNameContainer}>
                <h1 className={styles.eventName} title={value.Name}>{addDottsToEnd(value.Name,10)}</h1>
                <p className={styles.eventName}>MSP</p>
              </div>
              <div className={styles.eventBriefDesc}>{addDottsToEnd(value.BriefDesc,33)}</div>
            </div>
            <button className={styles.detailesBtn}>Read More</button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default OldEvents;
