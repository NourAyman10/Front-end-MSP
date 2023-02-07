import { useState, useEffect } from "react";

export const AdminLoginMethod = () => {
  const [error, setError] = useState();

  const validation = (formValues) => {
    let error = {
      email: [],
      password: []
    }
    // Regex for email
    const mailRGX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // Validate Email
console.log(formValues);

    if(formValues.email.length > 0)
      if(!mailRGX.test(formValues.email)){
        error.email.push("Please make sure that your email like that (Example@example.com)")
      }
    else
      error.email.push("Email field is Required")

    // Validate Password
    if(formValues.password.length == 0)
      error.password.push("Email field is Required")

    setError(error);
  }

  const getResultData = (data) => {
    console.log(data);
  }

  const loginMethod = (formValues) => {
    validation(formValues);
    //if(error.email.length === 0 && error.password.length === 0){
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({
        email: formValues.email,
        password: formValues.password
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(process.env.REACT_APP_FETCH_ADMIN_LOGIN, requestOptions)
        .then((response) => {
          console.log(response);
        })
        .then((result) => {
          console.log("result", result);
          //var obj = JSON.parse(result);
          //getResultData(obj);
        })
        .catch((error) => console.log("errors", error));
    //}
  }
  return [loginMethod,error];
};
