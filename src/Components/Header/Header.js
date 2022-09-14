import React from "react";
import styles from "./Header.module.css";
const Header = (props) => {
  return (
    <>
      <div className={styles['header-container']}>
        <h1>JS-blog</h1>
      </div>
    </>
  );
};

export default Header;
