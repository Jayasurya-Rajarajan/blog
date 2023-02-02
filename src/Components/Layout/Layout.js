import React, { useState } from "react";
import Header from "../Header/Header";
import LeftNavigation from "../NavigationBar/LeftNavigation";
import RightNavigation from "../NavigationBar/RightNavigation";
import Post from "../Posts/Post";
import styles from "./Layout.module.css";
import NoteProvider from "../../Store/Blogs/BlogsProvider";
import Settings from "../../Pages/Settings";

import { Routes, Route, useLocation, Re, Navigate } from "react-router-dom";

const Layout = (props) => {
  const [post, setPost] = useState({});
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("");
  if(currentPage !== location.pathname){
    setCurrentPage(location.pathname)
  }
  const getPostHandler = (post) => {
    setPost(post);
  };
  const clearState = () => {
    setPost({});
  };
  return (
    <>
      <NoteProvider>
        <div className={styles.header}>
          <Header />
        </div>
        <>
          {currentPage === "/Home" && (
            <div className={styles["flex-container"]}>
              <div className={styles["flex-item-leftnav"]}>
                <Routes>
                  <Route path="/Home" element={<LeftNavigation />} />
                </Routes>
              </div>
              <div className={styles["flex-item-post"]}>
                <Routes>
                  <Route
                    path="/Home"
                    element={
                      <Post newPost={post} clearStateHandler={clearState} />
                    }
                  />
                </Routes>
              </div>
              <div className={styles["flex-item-rightnav"]}>
                <Routes
                  path="/Home"
                  element={
                    <RightNavigation onGetPostHandler={getPostHandler} />
                  }
                />
              </div>
            </div>
          )}
        </>
        <Routes>
          <Route path="/Settings" element={<Settings />} />
        </Routes>
        <Routes>
          <Route exact path="" element={<Navigate to="/Home" replace={true} />} />
        </Routes>
      </NoteProvider>
    </>
  );
};
export default Layout;
