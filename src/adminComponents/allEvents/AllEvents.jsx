import React, { Fragment } from 'react'
import styles from "./AllEvents.module.css"

const AllEvents = () => {
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.background}>
          <div className={styles.shape}></div>
          <div className={styles.shape}></div>
          <div className={styles.shape}></div>
        </div>
      </div>
    </Fragment> 
  )
}

export default AllEvents