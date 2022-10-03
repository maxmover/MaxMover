//REACT ROUTER
import { Link } from "react-router-dom";

//HOOKS
import useClickOutside from "../../../../../common/CustomHooks/ClickOutside";
import { useState } from "react";
import SlideDrawer from "./../../RightNavbar/Submenus/SideDrawer";
import Backdrop from "./../../RightNavbar/Submenus/backdrop";

//ICONS , PICS , STYLES
import ProfilePic from "../../../../../pics/people1.jpg";
import styles from "./MyProfile.module.scss";
import { MdKeyboardArrowDown, MdOutlineSettings } from "react-icons/md";
import { RiUserSettingsLine } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";
import { VscLock } from "react-icons/vsc";
import { IoIosLogOut } from "react-icons/io";

const MyProfile = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isProfileOpen, setisProfileOpen] = useState(false);
  let domNode = useClickOutside(() => {
    setisProfileOpen(false);
  });

  function handleOpenDrawerButton() {
    setDrawerOpen(!drawerOpen);
  }

  function handleBackdropClick() {
    setDrawerOpen(false);
  }

  return (
    <div ref={domNode} className={styles.avatar_container}>
      <SlideDrawer show={drawerOpen} />
      {drawerOpen && <Backdrop closeDrawer={handleBackdropClick} />}
      <div
        className="d-flex"
        onClick={() => {
          setisProfileOpen(!isProfileOpen);
        }}
      >
        {/* AVATAR ICON */}
        {/* <div className={styles.icon_avatar_container}>
        <Avatar />
      </div> */}
        <div className="profileav">
          <img
            src={ProfilePic}
            alt=""
            width="50"
            style={{ borderRadius: "100%" }}
          />
        </div>
        {/* NAME */}
        <div className={styles.name}>
          <span>Jonas Luke</span>
          <MdKeyboardArrowDown />
        </div>
        {/* AVATAR/SETTINGS SUBMENU */}
        <div
          className={`${styles.menu} ${
            isProfileOpen ? styles.menu_active : ""
          }`}
        >
          <div className={styles.info}>
            <span className={styles.name}>
              <b>Welcome !</b>
            </span>

            {/* <span className={styles.role}>Adminstrator</span> */}
          </div>
          <div className={styles.settings}>
            <Link to="/">
              <RiUserLine /> &nbsp; My Account
            </Link>
            <Link to="/">
              <RiUserSettingsLine /> &nbsp; Setting
            </Link>
            <Link to="/">
              <VscLock /> &nbsp; Lock Screen
            </Link>
            <Link to="/" className="mt-3">
              <IoIosLogOut /> &nbsp; Logout
            </Link>
          </div>
        </div>
      </div>

      <div className="Setting mx-2" onClick={handleOpenDrawerButton}>
        <MdOutlineSettings />
      </div>
    </div>
  );
};

export default MyProfile;
