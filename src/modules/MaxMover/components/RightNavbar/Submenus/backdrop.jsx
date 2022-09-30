import React from "react";
import "./backdrop.scss";

const BackDrop = (props) => {
  return <div className="backdrop" onClick={props.closeDrawer}></div>;
};

export default BackDrop;
