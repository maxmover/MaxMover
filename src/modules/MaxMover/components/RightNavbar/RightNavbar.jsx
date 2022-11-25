//STYLES
import styles from "./RightNavbar.module.scss";

//HOOKS
import React, { useState } from "react";
import { useContext } from "react";

//CONTEXT
import ReactFlagsSelect from "react-flags-select";
import NavContext from "../Context/NavContext";
//ICONS , IMAGES
import { MdOutlineMenu } from "react-icons/md";

//Components
import MyProfile from "./Submenus/MyProfile";
import Notifications from "./Submenus/Notifications";
import Search from "./Submenus/Search";
import { FiMessageSquare } from "react-icons/fi";
import { NavLink } from "react-router-dom";
const RightNavbar = () => {
  const { nav, setNav } = useContext(NavContext);
  const [selected, setSelected] = useState("US");

  return (
    <div className={styles.container}>
      {/* BURGER */}
      <div
        className={styles.burger_container}
        onClick={() => {
          setNav(!nav);
        }}
      >
        <MdOutlineMenu />
      </div>

      {/* ACTIONS */}
      <div className={styles.actions}>
        <ReactFlagsSelect
          className=" d-none d-xxl-block d-xl-block d-lg-block d-md-block"
          selected={selected}
          onSelect={(code) => setSelected(code)}
          countries={["US", "GB", "FR", "DE", "IT", "NG"]}
          showSelectedLabel={false}
          showOptionLabel={false}
        />

        <div className={styles.right_nav_Search_icon}>
          <Search />
        </div>
        <Notifications />
        <div>
          <NavLink to="/max/messages">
            <FiMessageSquare />
          </NavLink>
        </div>
      </div>

      {/* My Profile */}
      <MyProfile />
    </div>
  );
};

export default RightNavbar;
