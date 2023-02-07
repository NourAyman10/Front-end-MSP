import React, { Fragment, useState, useEffect } from "react";
import styles from "./RegisterEvent.module.css";
import * as Icon from "react-bootstrap-icons";
import Lottie from "lottie-react";
import SuccessImage from "../../images/success.json";
import FailedImage from "../../images/failed.json";
import logoImage from "../../images/MSP LOGO WHITE.png";
import { RegisterEventData } from "../../context/RegisterEventData";
import { useNavigate,useParams } from "react-router";
import Loading from "../Helper/LoadingSpinner/Loading";

const RegisterEvent = () => {
  const [formErrorMessages, setFormErrorMessages] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const nav = useNavigate();
  var {id} = useParams();

  const [
    handleChange,
    formValues,
    registerData,
    validateInputs,
    resultMsg,
  ] = RegisterEventData(parseInt(id));

  const goHomePage = () => {
    nav("/");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrorMessages(validateInputs(formValues));
    setIsSubmit(true);
  };

  const cancel = () => {
    var message = document.getElementById("cancel");
    message.style.display = "none";
    window.location.reload();
  };

  useEffect(() => {
    console.log(formErrorMessages);
    if (Object.keys(formErrorMessages).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrorMessages]);

  return (
    <Fragment>
      <Loading />
      <div className={styles.container}>
        <div className={styles.background}>
          <div className={styles.shape}></div>
          <div className={styles.shape}></div>
          <div className={styles.shape}></div>
        </div>
        {/* <p className={styles.invalidError}>this phone number is already used in this event</p> */}
        <form className={styles.registerEventForm} onSubmit={handleSubmit}>
          {/* start header section  */}
          <div className={styles.headerContainer}>
            <div>
              <img src={logoImage} alt="msp_logo" className={styles.logoImage} />
              <div className={styles.communityName}>
                <p>MSP Tech Club</p>
                <p>Ain Shams University</p>
              </div>
            </div>

            <div>
              <button className={styles.home} onClick={goHomePage}>
                <Icon.HouseFill className={styles.icon} size={30} />
              </button>
            </div>
          </div>
          {/* end header section  */}

          {/* start inputs section  */}
          <div className={styles.inputsContainer}>
            {/**************************************************** start first name  *********************************************/}
            <div className={`${styles.dataEntry}`}>
              <input
                type="text"
                name="firstname"
                id="firstName"
                placeholder="First Name"
                value={formValues.firstname}
                onChange={handleChange}
              />
              <label htmlFor="firstName">
                <Icon.PersonFill
                  className={`${styles.userIcon} ${styles.icon}`}
                />
              </label>
            </div>
            <p className={styles.errorMessage}>{formErrorMessages.firstname}</p>

            {/**************************************************** end first name  *********************************************/}

            {/**************************************************** start last name  *********************************************/}
            <div className={`${styles.dataEntry}`}>
              <input
                type="text"
                name="lastname"
                id="lastName"
                placeholder="Last Name"
                value={formValues.lastname}
                onChange={handleChange}
              />
              <label htmlFor="lastName">
                <Icon.PersonFill
                  className={`${styles.userIcon} ${styles.icon}`}
                />
              </label>
            </div>
            <p className={styles.errorMessage}>{formErrorMessages.lastname}</p>
            {/**************************************************** end last name  *********************************************/}

            {/**************************************************** start email  *********************************************/}
            <div className={`${styles.dataEntry}`}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
              <label htmlFor="email">
                <Icon.EnvelopeAtFill
                  className={`${styles.userIcon} ${styles.icon}`}
                />
              </label>
            </div>
            <p className={styles.errorMessage}>{formErrorMessages.email}</p>
            {/**************************************************** end email  *********************************************/}

            {/**************************************************** start phone number  *********************************************/}
            <div className={`${styles.dataEntry}`}>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone"
                value={formValues.phone}
                onChange={handleChange}
              />
              <label htmlFor="phone">
                <Icon.TelephoneFill
                  className={`${styles.userIcon} ${styles.icon}`}
                />
              </label>
            </div>
            <p className={styles.errorMessage}>{formErrorMessages.phone}</p>
            {/**************************************************** end phone number  *********************************************/}

            {/**************************************************** end collage year  *********************************************/}
            <div className={`${styles.dataEntry}`}>
              <select
                name="year"
                id="year"
                title="Choose your Collage year"
                onChange={handleChange}
                value={formValues.year}
              >
                <option value="NAN">Collage year</option>
                <option value="1">Level 1</option>
                <option value="2">Level 2</option>
                <option value="3">Level 3</option>
                <option value="4">Level 4</option>
                <option value="5">Level 5</option>
              </select>
              <label htmlFor="year">
                <Icon.Calendar3
                  className={`${styles.yearIcon} ${styles.icon}`}
                />
              </label>
            </div>
            <p className={styles.errorMessage}>{formErrorMessages.year}</p>
            {/****************************************************  start department  *********************************************/}
            <div className={`${styles.dataEntry}`}>
              <select
                name="department"
                id="department"
                title="Choose your Department"
                onChange={handleChange}
                value={formValues.year}
              >
                <option value="NAN">Department</option>
                <option value="1">Mainstream</option>
                <option value="2">Bio informatics</option>
                <option value="3">AI</option>
                <option value="4">Other</option>
              </select>
              <label htmlFor="department">
                <Icon.Building
                  className={`${styles.yearIcon} ${styles.icon}`}
                />
              </label>
            </div>
            <p className={styles.errorMessage}>{formErrorMessages.year}</p>
            {/****************************************************   end department  *********************************************/}
          </div>
          <button type="submit" className={styles.loginBtn}>
            Register
          </button>
          {/* end inputs section  */}
        </form>
        
        {registerData(Object.keys(formErrorMessages).length === 0 && isSubmit)}

        {Object.keys(formErrorMessages).length === 0 && isSubmit ? (
          resultMsg === 1 ? (
            <div className={styles.massageContainer}>
              <div className={styles.registerSuccessfully}>
                <Lottie animationData={SuccessImage} loop={false} />
                <p>Successfully Registered</p>
                <button onClick={goHomePage}>Go Home</button>
              </div>
            </div>
          ) : resultMsg === 0 ? (
            <div id="cancel" className={styles.massageContainer}>
              <div className={styles.registerSuccessfully}>
                <Lottie animationData={FailedImage} loop={false} />
                <p className={styles.errorText}>Phone number is already used in this event</p>
                <button onClick={cancel}>Cancel</button>
              </div>
            </div>
          ) : (
            <div id="cancel" className={styles.massageContainer}>
              <div className={styles.registerSuccessfully}>
                <Lottie animationData={FailedImage} loop={false} />
                <p className={styles.errorText}>E-mail number is already used in this event</p>
                <button onClick={cancel}>Cancel</button>
              </div>
            </div>
          )
        ) : (
          ""
        )}
      </div>
    </Fragment>
  );
};

export default RegisterEvent;
