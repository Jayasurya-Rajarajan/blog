import React,{useState} from "react";
import Header from "../Header/Header";
import LeftNavigation from "../NavigationBar/LeftNavigation";
import RightNavigation from "../NavigationBar/RightNavigation";
import Post from "../Posts/Post";
import styles from "./Layout.module.css";
import NoteProvider from '../../Store/Blogs/BlogsProvider';

const Layout = (props) => {
  const [post, setPost] = useState({});
  const getPostHandler = (post) =>{
    setPost(post)
  }
  const clearState = () =>{
    setPost({});
  }
  return (
    <>
    <NoteProvider>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles['flex-container']}>
        <div className={styles['flex-item-leftnav']}>
          <LeftNavigation />
        </div>
        <div className={styles["flex-item-post"]}>
          <Post newPost={post} clearStateHandler={clearState} />
        </div>
        <div className={styles["flex-item-rightnav"]}>
          <RightNavigation onGetPostHandler={getPostHandler} />
        </div>
      </div>
      </NoteProvider>
    </>
  );
};
export default Layout;
