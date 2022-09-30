//STYLES
import styles from "./RightNavbar.module.scss";

//HOOKS
import React, { useState } from "react";
import { useContext } from "react";

//CONTEXT
import ReactFlagsSelect from "react-flags-select";
import NavContext from "../../common/Context/NavContext";
//ICONS , IMAGES
import { MdOutlineMenu } from "react-icons/md";

//Components
import MyProfile from "./Submenus/MyProfile";
import Notifications from "./Submenus/Notifications";
import Search from "./Submenus/Search";

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
          selected={selected}
          onSelect={(code) => setSelected(code)}
          countries={["US", "GB", "FR", "DE", "IT", "NG"]}
          showSelectedLabel={false}
          showOptionLabel={false}
        />
        <Search />
        <Notifications />
        {/* <Support /> */}
      </div>

      {/* My Profile */}
      <MyProfile />
    </div>
  );
};

export default RightNavbar;
