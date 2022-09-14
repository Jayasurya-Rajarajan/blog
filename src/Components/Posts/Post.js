import React from "react";
import styles from "./Post.module.css";
import PostList from "./PostList";

const DUMMY_DATA = [
  {
    name: "jayasurya",
    title: "first post",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    name: "jayasurya",
    title: "second post",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    name: "jayasurya",
    title: "third post",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    name: "jayasurya",
    title: "fourth post",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
];

const Post = (props) => {
  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["post-header"]}>
          <h1>Posts</h1>
        </div>
        <div className={styles["post-content"]}>
          {
            DUMMY_DATA.map((item)=> <PostList posts={item} /> )
          }
          </div>
      </div>
    </>
  );
};
export default Post;
