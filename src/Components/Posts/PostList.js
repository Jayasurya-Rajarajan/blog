import React from "react";
import styles from "./PostList.module.css";
import profile from "../../ProfileImages/profile.png";
import humanProfile from "../../ProfileImages/human-profile.jpg";
import useFormatDateTime from "../../Hooks/use-datetime";
import DeletePost from "./DeletePost";
const PostList = (props) => {
  const { getDateAndTime } = useFormatDateTime();
  return (
    <>
      <div key={props.id}>
        <div className={styles["top-userdetails"]}>
          <div className={styles["image-part"]}>
            <img src={humanProfile} height="30px" width="30px" alt="profile" />
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
              <div>
                
                <div className={styles["post-date"]}>
                  <p>
                    Posted on {getDateAndTime(props.posts.CreatedOn).date}{" "}
                    {getDateAndTime(props.posts.CreatedOn).time}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
};
export default PostList;
