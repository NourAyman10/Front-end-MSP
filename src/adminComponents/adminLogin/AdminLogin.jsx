import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AdminLogin.module.css";
//import axios from 'axios'

import * as Icon from "react-bootstrap-icons";
import logoImage from "../../images/MSP LOGO WHITE.png";
import PasswordToggle from "./../../context/PasswordToggle";
import { UserAuth } from "../../context/AuthContext";
import Loading from "../../userComponents/Helper/LoadingSpinner/Loading";
import { AdminLoginMethod } from "../context/AdminLoginMethod";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState("");
  const navigate = useNavigate();
  const [ShowHiddenPasswordIcon, InputPasswordType] = PasswordToggle();
  const { authLogin } = UserAuth();
  const [loginMethod,error] = AdminLoginMethod();


  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/admin/dashboard");
    }
  });

  const nav = useNavigate();
  const goHomePage = () => {
    nav("/");
  }

  const startFetching = (e) => {
    e.preventDefault();
    let user = {
      email: email,
      password: password
    }
    loginMethod(user)
  }


  return (
    <Fragment>
      <Loading />
      <div className={styles.errorBox}>
        err
      </div>

      <div className={styles.background}>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
      </div>
      <form className={styles.adminLoginForm} method="POST">
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
          <div className={`${styles.email} ${validation && styles.error}`}>
            <input type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">
              <Icon.PersonFill
                className={`${styles.userIcon} ${styles.icon}`}
              />
            </label>
          </div>

          <div className={`${styles.password} ${validation && styles.error}`}>
            <div className={styles.pass}>
              <input
                type={InputPasswordType}
                name=""
                id="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password">
                <Icon.LockFill
                  className={`${styles.passwordIcon} ${styles.icon}`}
                />
              </label>
            </div>
            <div className={styles.showHidden}>{ShowHiddenPasswordIcon}</div>
          </div>
        </div>
        <button type="submit" className={styles.loginBtn} onClick={startFetching}>
          Login
        </button>
        {/* end inputs section  */}
      </form>
    </Fragment>
  );
};

export default AdminLogin;
