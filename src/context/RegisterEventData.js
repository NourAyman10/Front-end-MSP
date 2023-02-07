import { useState } from "react";

export const RegisterEventData = (id) => {
  const initialValues = {
    eventId: null,
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    year: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [resultMsg, setResultMsg] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value.toString() });
  };

  const getResultData = (obj) => {
    var result = obj.message;
    if (result === "your response submitted successfuly") {
      setResultMsg(1);
    }
    if (result === "this phone number is already used in this event") {
      setResultMsg(0);
    }
    if (result === "this E-mail is already used in this event") {
      setResultMsg(-1);
    }
  };

  const registerData = (registered) => {
    if (registered === true) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({
        eventId: id,
        firstName: formValues.firstname,
        lastName: formValues.lastname,
        email: formValues.email,
        phone: formValues.phone,
        collYear: parseInt(formValues.year),
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(process.env.REACT_APP_FETCH_REGISTER_EVENT, requestOptions)
        .then((response) => response.text())
        .then((result) => {
          console.log("result", result);
          var obj = JSON.parse(result);
          getResultData(obj);
        })
        .catch((error) => console.log("errors", error));
    }
  };

  function validateInputs(values) {
    const errors = {};
    const emailRegex = /[^\s]*@[a-z0-9.-]*/i;
    const phoneRegex = /^01(2|1|5|0)\d{8}$/i;
    if (!values.firstname) {
      errors.firstname = "First name is required!";
    }
    if (!values.lastname) {
      errors.lastname = "Last name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Please enter valid email!";
    }
    if (!values.phone) {
      errors.phone = "phone is required!";
    } else if (!phoneRegex.test(values.phone)) {
      errors.phone = "Please enter valid phone number!";
    }
    if (!values.year) {
      errors.year = "Please choose your level!";
    }
    return errors;
  }

  return [handleChange, formValues, registerData, validateInputs, resultMsg];
};
