import React, { useState } from "react";

const Alert = (props) => {
  const { alertText } = props;
  let colorVal = "";

  if (alertText) {
    if (alertText === "Item Added to the List") {
      colorVal = "alert-success";
    }
    if (alertText === "Empty List") {
      colorVal = "alert-danger";
    }
  }

  return (
    <div className="alert">
      <h4 className={colorVal}>{alertText}</h4>
    </div>
  );
};

export default Alert;
