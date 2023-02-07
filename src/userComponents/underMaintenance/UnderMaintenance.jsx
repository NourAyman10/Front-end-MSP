import React, { Fragment } from "react";
import Lottie from "lottie-react";
import underMaintenance from "../../images/underMaintenance.json";
import styles from "./UnderMaintenance.module.css";
import facebookIcon from "../../images/icons/facebookIcon.svg";
import linkedInIcon from "../../images/icons/linkedInIcon.svg";
import { useNavigate } from "react-router-dom";

const UnderMaintenance = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <div className={styles.underMaintenanceContainer}>
        <div className={styles.textSection}>
          <h1>Oops!</h1>
          <h1>Under maintenance</h1>
          <p>
            We sincerely apologize for the incovenience.
            Our website is currently under maintenance and will return shortly.
            Pleace Try Agian later.
          </p>
          <div className={styles.buttons}>
            <button onClick={() => navigate(-1)}>Go back</button>
          </div>
        </div>
        <div className={styles.imageSection}>
          <Lottie animationData={underMaintenance} loop={true} />
        </div>
      </div>
      <footer>
        <a href="https://www.facebook.com/ASUTC">
          <img src={facebookIcon} alt="facebook-icon" />
        </a>
        <a href="https://www.linkedin.com/company/msp-tech-club-asu-22/mycompany/">
          <img src={linkedInIcon} alt="linkedIn-icon" />
        </a>
      </footer>
    </Fragment>
  );
};

export default UnderMaintenance;
