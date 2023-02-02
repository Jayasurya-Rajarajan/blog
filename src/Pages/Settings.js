import React from "react";
import ProfileImage from "../Components/Settings/profileImage";
import styles from './Settings.module.css';
const Settings = () =>{
    return(
        <>
        <div className={styles.setting__parent}>
            <section className={styles.profile__image__section}>
                <ProfileImage />
            </section>
        </div>
        </>
    );
}

export default Settings;