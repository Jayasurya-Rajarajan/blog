import React from "react";
import Header from "../Header/Header";
import LeftNavigation from "../NavigationBar/LeftNavigation";
import RightNavigation from "../NavigationBar/RightNavigation";
import Post from "../Posts/Post";
import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles['flex-container']}>
        <div className={styles['flex-item-leftnav']}>
          <LeftNavigation />
        </div>
        <div className={styles["flex-item-post"]}>
          <Post />
        </div>
        <div className={styles["flex-item-rightnav"]}>
          <RightNavigation />
        </div>
      </div>
    </>
  );
};
export default Layout;
