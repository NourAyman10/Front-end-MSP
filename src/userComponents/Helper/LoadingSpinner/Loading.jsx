import React, { Fragment, useState, useRef } from "react";
import Styles from "./Loading.module.css";

const Loading = () => {
  const [visible, setVisible] = useState(true);
  const ref = useRef(null);

    setTimeout(()=>{
      let LoopInterval = setInterval(()=>{
        if (document.readyState === 'complete') {
          setVisible(false);
          clearInterval(LoopInterval);
        }
      },100)
    },500);

  return (
    <Fragment>
      {visible && (      
        <section className={Styles.loadingSec} id="loading" ref={ref}>
          <span className={Styles.loader}></span>
          <p>Getting Every thing ready for you Please wait..</p>
        </section>
      )}
    </Fragment>
  );
};

export default Loading;