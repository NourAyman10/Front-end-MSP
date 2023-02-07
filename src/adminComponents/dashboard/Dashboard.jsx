import React, { Fragment } from 'react'
import styles from "./Dashboard.module.css";
import { useNavigate } from 'react-router-dom';
import mainImage from "./eventIcon.svg"

const Dashboard = () => {
  const navigate = useNavigate();

  const goToEvents = () => {
    navigate("/admin/allEvents");
  }

  return (
    <Fragment>
      <div className={styles.container} onClick={goToEvents}>
        <div className={styles.mainImage}></div>
        <img src={mainImage} alt="mainImage"/>
        <p>All Events</p>
      </div>
    </Fragment>
  )
}

export default Dashboard