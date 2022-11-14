//STYLES
import styles from "./Navbar.module.scss";
// import { usermanageCustomer } from "../UsermanageCustomer/UsermanageCustomer";
import "animate.css";

//CONTEXT
import { useContext, useState } from "react";
import NavContext from "../Context/NavContext";

//REACT ROUTER
import { Link, useNavigate } from "react-router-dom";

//LOGO
import logo from "../../../../pics/maxmover_logo.png";
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
import { IoNewspaperOutline } from "react-icons/io5";
const Navbar = () => {
  let navigation = useNavigate();
  const { nav, setNav } = useContext(NavContext);
  // const [activeTab, setActiveTab] = useState(1);
  // const checkWindowSize = () => {
  //   if (window.innerWidth < 1240) setNav(!nav);
  // };
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [lastSelectedMenu, setLastSelectedMenu] = useState(null);
  const [menuItems] = useState([
    {
      title: "Dashboard",
      icon: <MdOutlineDashboardCustomize />,
      link: "/max/dashboard",
    },

    {
      title: "User Management",
      icon: <MdOutlineManageAccounts />,
      subItems: [
        { title: "Customers", link: "/max/Customer" },
        { title: "Employees", link: "/max/employees" },
        { title: "Sub-contractors", link: "/max/sub_contractors" },
        { title: "Receptions", link: "/max/receptions" },
        { title: "Refereers", link: "/max/refereers" },
      ],
    },
    {
      title: "Inquiry Management",
      icon: <AiOutlineFileSearch />,
      subItems: [
        { title: "Inquiries", link: "/max/inquiries" },
        { title: "Followups", link: "/max/followups" },
        { title: "Quotations", link: "/max/quotations" },
        { title: "Jobs", link: "/max/jobs" },
      ],
    },
    {
      title: "Job Payment Management",
      icon: <GiExpense />,
      subItems: [
        { title: "Job Expense Report", link: "/max/job_expense_report" },
        { title: "Employee ", link: "/max/job_payment_employees" },
        { title: "Admin", link: "/max/job_payment_admin" },
        { title: "Sub-contractor", link: "/max/job_payment_sub_contractor" },
        { title: "Fuel Account", link: "/max/fuel_account" },
        { title: "Discount report", link: "/max/discount_report" },
        { title: "Hours report", link: "/max/hours_report" },
        { title: "Invoices", link: "/max/invoices" },
      ],
    },
    {
      title: "Expense Management",
      icon: <MdOutlineManageAccounts />,
      link: "/max/account_management",
    },
    {
      title: "Max Cliq",
      icon: <BsChatLeftDots />,
      subItems: [
        { title: "Announcement", link: "/max/announcement" },
        { title: "Policy & Insurance Management", link: "/max/policymanage" },
        { title: "Training Management", link: "/max/training_management" },
      ],
    },
    {
      title: "Service Categories",
      icon: <GiGears />,
      link: "/max/service_category",
    },
    {
      title: "Vehicle Management",
      icon: <BsTruck />,
      link: "/max/vehiclemanagement",
    },
    {
      title: "NewsLetter Management",
      icon: <IoNewspaperOutline />,
      subItems: [
        { title: "NewsLetter Templates", link: "/max/news_letter_templates" },
        { title: "send NewsLetter", link: "/max/send_news_letter" },
      ],
    },
    {
      title: "Templates & Notes",
      icon: <VscServerEnvironment />,
      link: "/max/templates_notes",
    },
    {
      title: "SMS Management",
      icon: <BsChatLeftDots />,
      subItems: [
        { title: "SMS Management Templates", link: "/max/smsmanagement" },
        { title: "send sms", link: "/max/send_sms" },
      ],
    },
  ]);

  const MenuItem = ({ menu, i }) => {
    return (
      <div
        className={`${styles.li_navlink} ${
          selectedMenu === i ? styles.sidetabsactive : ""
        }`}
      >
        <span
          onClick={() => {
            if (selectedMenu === i) setSelectedMenu(null);
            else setSelectedMenu(i);
            if (!menu?.subItems) navigation(menu.link);
          }}
          className={`d-flex position-relative  ${
            selectedMenu === i ? styles.active : ""
          }`}
        >
          <div className="mx-3">{menu.icon}</div>
          <div className={styles.description}>{menu.title} </div>
          <div className={styles.arrow}>
            {menu.subItems &&
              (selectedMenu === i ? (
                <MdOutlineKeyboardArrowDown />
              ) : (
                <MdOutlineKeyboardArrowRight />
              ))}
          </div>
        </span>
        {menu?.subItems && (
          <div className={styles.settings}>
            {selectedMenu === i &&
              menu.subItems.map((subItem, j) => (
                <Link
                  key={j}
                  onClick={() => {
                    menu["activeSubItem"] = j;
                    setLastSelectedMenu(i);
                  }}
                  className={
                    lastSelectedMenu === i && menu["activeSubItem"] === j
                      ? styles.subactive
                      : null
                  }
                  to={subItem.link}
                >
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
      }`}
    >
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
        }}
      ></div>
    </div>
  );
};

export default Navbar;
