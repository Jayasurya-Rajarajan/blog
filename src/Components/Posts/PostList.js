import React from "react";
import styles from "./PostList.module.css";
import profile from '../../ProfileImages/profile.png';
const PostList = (props) => {
  return (
    <>
      <div key={props.id}>
        <div className={styles['top-userdetails']}>
          <div className={styles['image-part']}>
            <img src={profile} height="40px" width="40px" alt="profile" />
          </div>
          <h2>{props.posts.CreatedBy}</h2>
        </div>
        <ul key={props.id} className={styles["list-wrap"]}>
          <div className={styles["container"]}>
            <div className={styles["post-container"]}>
              <h2>{props.posts.Title}</h2>
              <div className={styles["post-description"]}>
                <p>{props.posts.Content}</p>
              </div>
            </div>
          </div>
        </ul>
        <div>
          <p>Date</p>
        </div>
      </div>
    </>
  );
};
export default PostList;
