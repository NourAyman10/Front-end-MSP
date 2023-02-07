import React, { Fragment } from "react";
import { useNavigate,useParams } from "react-router-dom";
import GetEventByID from "../../context/getEventByID";
import NavBar from "../navBar/NavBar";
import styles from "./MoreDetailes.module.css";
import { helperFN } from "../Helper/functions/helperFunctions";

const MoreDetailes = () => {
  var {id} = useParams();
  const nav = useNavigate();
  const [EventData] = GetEventByID(id);

  const navRegisterEvent = (id) => {
    nav("/registerEvent/"+id);
  };


  return (
    <Fragment>
      <div className={styles.moreDetailesContainer}>
        <NavBar />
        <header>
          <div 
          className={styles.imgContainer}
          style={{ backgroundImage: "url(" + process.env.REACT_APP_FETCH_IMG_URL + EventData.imagePath + ")" }}
          ></div>
          <div className={styles.overlay}>
            <div 
            className={styles.eventIcon}
            style={{ backgroundImage: "url(" + process.env.REACT_APP_FETCH_IMG_URL + EventData.imagePath + ")" }}
            >
            </div>
            <div className={styles.eventHeader}>
              <h2>{EventData.Name}<span>MSP</span></h2>
              <p>{helperFN.formatDate(EventData.Date)}</p>
            </div>
          </div>
        </header>

        <section className={styles.details}>
          <div>
            {EventData.FullDesc}
          </div>

        </section>

        {
        !EventData.IsCompleted && 

        <div style={{textAlign:"center"}}>
            <button className={styles.registerBtn} onClick={()=>{navRegisterEvent(EventData.ID)}}>Register Now</button>
        </div>

        }
      </div>
    </Fragment>
  );
};
export default MoreDetailes;
