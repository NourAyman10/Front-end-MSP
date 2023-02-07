import React from 'react'
import { useState } from 'react';
import * as Icon from "react-bootstrap-icons"
import styles from "./../adminComponents/adminLogin/AdminLogin.module.css"

const PasswordToggle = () => {
    const [visiblity, setVisiblity] = useState(false);
    const ShowHiddenPasswordIcon = (
        visiblity ? <Icon.EyeSlash className={`${styles.eyeSlashIcon} ${styles.icon}`} onClick={()=>setVisiblity(visiblity => !visiblity)} /> : <Icon.Eye className={`${styles.eyeIcon} ${styles.icon}`} onClick={()=>setVisiblity(visiblity => !visiblity)} />
    );

    const InputPasswordType = visiblity ? "text" : "password";

  return (
    [ShowHiddenPasswordIcon, InputPasswordType]
  );
}

export default PasswordToggle