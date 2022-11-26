import React from "react";
import styles from "./LeftNavigation.module.css";
import profile from "../../ProfileImages/human-profile.jpg";
import Input from "../Inputs/Input";
import Settings from "../Setting/Settings";
const LeftNavigation = (props) => {
  const profilePhotoChangeHandler = (event) =>{
    event.preventDefault();
    document.getElementById("file-upload").click()
  }
  return (
    <>
    <div className={styles['setting-icon']}>
      <Settings />
    </div>
      <div className={styles["container"]}>
        <div className={styles["inner-container"]}>
          <div className={styles["leftpanel-profile"]}>
            <p className={styles['change-image-text']}><strong>change</strong></p>
            <img src={profile} onClick={profilePhotoChangeHandler} height="150px" width="150px" />
            <Input onProfilePhotoChangeHandler={profilePhotoChangeHandler} />
          </div>
          <div className={styles["leftpanel-username"]}>
            <h3>Jayasurya</h3>
          </div>
          <div className={styles["user-details"]}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500swhen an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default LeftNavigation;
