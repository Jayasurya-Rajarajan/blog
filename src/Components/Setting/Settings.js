import React from "react";

const Settings = () => {
    const settingClickHandler = (event) =>{
        event.preventDefault();
    }
  return (
    <>
      <i onClick={settingClickHandler} className="fa fa-cog" aria-hidden="true"></i>
    </>
  );
};

export default Settings;
