import React, { Fragment, useState, useEffect, useRef } from "react";
import styles from "./questForm.module.css";
import * as Icon from "react-bootstrap-icons";
import logoImage from "../../images/MSP LOGO WHITE.png";
import { RegisterEventData } from "../../context/RegisterEventData";
import { useNavigate } from "react-router";
import Loading from "../Helper/LoadingSpinner/Loading";

const questForm = () => {
  const ref = useRef(null);
  let answers = [];
  let multiQuests = [];
  
  const questions = [
    {
      'question': "Question 1(text)?",
      'type': 0, // Text Question
      'answer':null
    },
    {
      'question': "Question 2 (one)?",
      'type': 1, // one choice
      'answer': "ans1%?ans2%?ans3"
    },
    {
      'question': "Question 3 (multi)?",
      'type': 2, // multi choice
      'answer': "ans1%?ans2%?ans3%?ans4"
    },
    {
      'question': "Write Hello World Code in c++",
      'type': 0, // Text Question
      'answer':null
    },
    {
      'question': `"hyper text markup language" is .....`,
      'type': 1, // one choice
      'answer': "HTML%?CSS%?JS%?Type Script%?Other"
    },
    {
      'question': "Sellect all *TRUE* Statements about web development",
      'type': 2, // multi choice
      'answer': "HTTP means hyper text to push%?css means Cascading Style Sheets%?Some css properties are not available on limited browsers"
    }
  ]

  let counter = 1;
  const [isSubmit, setIsSubmit] = useState(false);
  const nav = useNavigate();
  const [
    handleChange,
    formValues,
    registerData,
    validateInputs,
    resultMsg,
  ] = RegisterEventData();
  
  const goHomePage = () => {
    nav("/");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getValues();
  };


  const getValues = () => {
    validateCheckboxes();
    for(let i=0;i<counter-1;i++){
      answers[i] = [];
      document.getElementsByName('Q'+ (+i+1)).forEach(e => {
        if(e.checked || e.checked == undefined)
          answers[i].push(e.value);
      });
    }
    console.log(answers);
  }

  const validateCheckboxes = () => {
    for(let i=0;i<multiQuests.length;i++){
      let checkBoxes = document.querySelectorAll(`input[name='${multiQuests[i]}']:checked`)
      if(checkBoxes.length == 0){
        document.querySelector(`#${multiQuests[i]}`).classList.add(styles.showErr);
      }else{
        document.querySelector(`#${multiQuests[i]}`).classList.remove(styles.showErr);
      }
    }
  }

  const questMaker = (e) => {
    // Text Question
    if(e.type == 0){
      let newEle = `
        <div class="${styles.question}">
          <div class="${styles.questHeader}"><p>${"Q" + counter + ": " + e.question}</p><div><span>Text Answer</span></div></div>
          <div class="${styles.type}">
            <textarea required name="${"Q" + counter}" placeholder="Enter your answer here (you can resize the input)"></textarea>
          </div>
        </div>
      `;
      useEffect(() => {
        const element = ref.current;
        element.innerHTML += newEle;
      }, []);
    }
    // One Choice
    else if(e.type == 1){
      let req = true;
      let ansCount = 0;
      let answers = e.answer.split('%?');
      let newEle = `
      <div class="${styles.question}">
      <div class="${styles.questHeader}"><p>${"Q" + counter + ": " + e.question}</p><div><span>One Choice</span></div></div>
        <div class="${styles.type}">
          <div class="${styles.choices}">
      `;

      {answers.forEach(ans => {
        newEle += `
        <div class="${styles.choice}">
          <input type="radio" id="${"Q" + counter + ansCount}" name="${"Q" + counter}" value="${ans}" ${req?"required":""} />
          <label for="${"Q" + counter + ansCount}" class="${styles.view}">
            ${ans}
          </label>
        </div>`
        req = false;
        ansCount++;
    })}

    newEle += `</div>
    </div>
  </div>`

      useEffect(() => {
        const element = ref.current;
        element.innerHTML += newEle;
      }, []);
    }
    // Multiple Choices
    else if(e.type == 2){
      let req = true;
      let ansCount = 0;
      let answers = e.answer.split('%?');
      multiQuests.push("Q" + counter);
      let newEle = `
      <div class="${styles.question}">
      <div class="${styles.questHeader}"><p>${"Q" + counter + ": " + e.question}</p><div><span>Multiple Choices</span></div></div>
        <div class="${styles.type}">
          <div class="${styles.choices}">
      `;
            answers.forEach(ans => {
              newEle += `
                <div class="${styles.choice}">
                  <input type="checkbox" id="${"Q" + counter + ansCount}" name="${"Q" + counter}" value="${ans}" />
                  <label for="${"Q" + counter + ansCount}" class="${styles.view}">
                    ${ans}
                  </label>
                </div>
              `
              ansCount++;
              req = false;
            })

            newEle += `</div>
                    <p class="${styles.err}" id="${"Q" + counter}">This field is required</p>
                  </div>
                </div>`

        useEffect(() => {
          const element = ref.current;
          element.innerHTML += newEle;
        }, []);
    }
    counter++;
  }

  // Start adding Questions to the Form
  questions.forEach(ele => {
    questMaker(ele);
  })

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

          <div id="quest" className={styles.quest} ref={ref}></div>

          <div className={styles.subConainer}>
            <button type="submit" className={styles.loginBtn}>Submit Answers</button>
          </div>
          
          {/* end inputs section  */}
        </form>
      </div>
    </Fragment>
  );
};

export default questForm;
