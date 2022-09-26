import React from "react";
import "./Sidedrawer.scss";
import Sidebartabs from "./Sidebartabs"

const SlideDrawer = ({ show }) => {
  let drawerClasses = show ? "side-drawer open" : "side-drawer";

  return (
    <div className={drawerClasses}>
      <Sidebartabs />
    </div>
  );
};

export default SlideDrawer;
