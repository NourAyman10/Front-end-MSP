import React, { Fragment } from "react";
import NavBar from "../navBar/NavBar";
import Lottie from "lottie-react";
import errorImage from "../../images/404error full.json";
import styles from "./ErrorPage.module.css";
import facebookIcon from "../../images/icons/facebookIcon.svg";
import linkedInIcon from "../../images/icons/linkedInIcon.svg";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <NavBar />
      <div className={styles.errorPageContainer}>
        <div className={styles.textSection}>
          <h1>Page 404</h1>
          <h1>Not Found</h1>
          <p>
            The page you requested was not found, and we have a fine guess why.
            If you type the URL directly pleace make sure the spelling is
            correct. If you clicked on a link to go here, the link is outdated.
            What can you do? Have no fear, help is near.
          </p>
          <div className={styles.buttons}>
            <button onClick={() => navigate(-1)}>Go back</button>
            <button onClick={() => navigate("/")}>Go Home</button>
          </div>
        </div>
        <div className={styles.imageSection}>
          <Lottie animationData={errorImage} loop={true} />
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

export default ErrorPage;
