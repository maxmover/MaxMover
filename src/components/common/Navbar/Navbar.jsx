//STYLES
import styles from "./Navbar.module.scss";
// import { usermanageCustomer } from "../UsermanageCustomer/UsermanageCustomer";

//CONTEXT
import { useContext, useState } from "react";
import NavContext from "../../common/Context/NavContext";

//REACT ROUTER
import { Link, useNavigate } from "react-router-dom";

//LOGO
import logo from "../../../pics/maxmover_logo.png";
//ICONS
import {
  MdOutlineDashboardCustomize,
  MdOutlineManageAccounts,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { GiExpense } from "react-icons/gi";
import { BsChatLeftDots, BsTruck } from "react-icons/bs";
import { VscServerEnvironment } from "react-icons/vsc";
import { AiOutlineFileSearch } from "react-icons/ai";
import { GiGears } from "react-icons/gi";

const Navbar = () => {
  let navigation = useNavigate();
  const { nav, setNav } = useContext(NavContext);
  const [activeTab, setActiveTab] = useState(1);
  // const checkWindowSize = () => {
  //   if (window.innerWidth < 1240) setNav(!nav);
  // };
  const [menuItems] = useState([
    {
      title: "Dashboard",
      icon: <MdOutlineDashboardCustomize />,
      link: "/",
    },

    {
      title: "User Management",
      icon: <MdOutlineManageAccounts />,
      activeSubItem: null,
      subItems: [
        { title: "Customers", link: "UsermanageCustomer" },
        { title: "Employees", link: "UsermanageEmployee" },
        { title: "Sub-contractors", link: "UsermanageSubContactor" },
        { title: "Receptions", link: "UsermanageReception" },
        { title: "Refereers", link: "UsermanageRefereers" },
      ],
    },
    {
      title: "Inquiry Management",
      icon: <AiOutlineFileSearch />,
      activeSubItem: null,
      subItems: [
        { title: "My Account", link: "my_account" },
        { title: "Setting", link: "settings" },
        { title: "Lock Screen", link: "lock_screen" },
      ],
    },
    {
      title: "Job Payment Management",
      icon: <GiExpense />,
      activeSubItem: null,
      subItems: [
        { title: "My Account", link: "my_account" },
        { title: "Setting", link: "settings" },
        { title: "Lock Screen", link: "lock_screen" },
      ],
    },
    {
      title: "Account Management",
      icon: <MdOutlineManageAccounts />,
      activeSubItem: null,
      subItems: [
        { title: "My Account", link: "my_account" },
        { title: "Setting", link: "settings" },
        { title: "Lock Screen", link: "lock_screen" },
      ],
    },
    {
      title: "Max Cliq",
      icon: <BsChatLeftDots />,
      activeSubItem: null,
      subItems: [
        { title: "My Account", link: "my_account" },
        { title: "Setting", link: "settings" },
        { title: "Lock Screen", link: "lock_screen" },
      ],
    },
    {
      title: "Service Categories",
      icon: <GiGears />,
      activeSubItem: null,
      link: "/service_categories",
    },
    {
      title: "Vehicle Management",
      icon: <BsTruck />,
      activeSubItem: null,
      subItems: [
        { title: "My Account", link: "my_account" },
        { title: "Setting", link: "settings" },
        { title: "Lock Screen", link: "lock_screen" },
      ],
    },
    {
      title: "Templates & Notes",
      icon: <VscServerEnvironment />,
      activeSubItem: null,
      subItems: [
        { title: "My Account", link: "my_account" },
        { title: "Setting", link: "settings" },
        { title: "Lock Screen", link: "lock_screen" },
      ],
    },
    {
      title: "SMS Management",
      icon: <BsChatLeftDots />,
      activeSubItem: null,
      subItems: [
        { title: "My Account", link: "my_account" },
        { title: "Setting", link: "settings" },
        { title: "Lock Screen", link: "lock_screen" },
      ],
    },
  ]);

  const MenuItem = ({ menu, i }) => {
    const [showItems, setShowItems] = useState(false);
    return (
      <div
        className={`${styles.li_navlink} ${
          menu.isActive ? styles.sidetabsactive : ""
        }`}>
        <span
          onClick={() => {
            if (menu.isActive) menu.isActive = false;
            else menu["isActive"] = true;
            if (menu?.subItems) setShowItems(!showItems);
            else navigation(menu.link);
          }}
          className={`d-flex position-relative ${
            menu.isActive ? styles.active : ""
          }`}>
          <div className="mx-3">{menu.icon}</div>
          <div className={styles.description}>{menu.title} </div>
          <div className={styles.arrow}>
            {menu.subItems &&
              (showItems ? (
                <MdOutlineKeyboardArrowDown />
              ) : (
                <MdOutlineKeyboardArrowRight />
              ))}
          </div>
        </span>
        {menu?.subItems && (
          <div className={styles.settings}>
            {menu?.isActive &&
              menu.subItems.map((subItem, i) => (
                <Link
                  onClick={() => {
                    menu.activeSubItem = i;
                  }}
                  className={menu.activeSubItem === i ? styles.subactive : null}
                  to={subItem.link}>
                  &nbsp; {subItem.title}
                </Link>
              ))}
          </div>
        )}
      </div>
    );
  };
  return (
    <div
      className={`${styles.navbar_container} ${
        nav ? styles.navbar_mobile_active : ""
      }`}>
      <nav>
        {/* LOGO */}
        <div className="text-center">
          {/* <VscDashboard className={styles.logo_icon} /> */}
          <div className={styles.logo}>
            <img
              src={logo}
              width="100"
              alt=""
              // onClick={() => {
              //   setNav(!nav);
              // }}
            />
          </div>
        </div>

        {/* MENU */}
        <ul className={styles.menu_container}>
          {/* FIRST CATEGORY */}
          {menuItems.map((menu, i) => (
            <MenuItem key={i} menu={menu} i={i} />
          ))}
        </ul>

        {/* LOGOUT BUTTON */}
        {/* <div
          className={`${styles.btn_logout}`}
          onClick={() => {
            setNav(!nav);
          }}>
          <MdOutlineLogout />
        </div> */}
      </nav>
      {/* backdrop to close nav */}
      <div
        className={nav ? styles.mobile_nav_background_active : null}
        onClick={() => {
          setNav(!nav);
        }}></div>
    </div>
  );
};

export default Navbar;
