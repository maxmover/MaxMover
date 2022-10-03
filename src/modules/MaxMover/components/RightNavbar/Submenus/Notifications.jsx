//ICONS , STYLES
import { BiBell } from "react-icons/bi";
import styles from "./Notifications.module.scss";
import ProfilePic from "../../../../../pics/people1.jpg";

//HOOKS
import { useState } from "react";
import useClickOutside from "../../../../../common/CustomHooks/ClickOutside";
const Notification = ({ title, content, date }) => {
  return (
    <div className={styles.notification}>
      <div className="col-3 text-center">
        <div className="profileav">
          <img
            src={ProfilePic}
            alt=""
            width="50"
            style={{ borderRadius: "100%" }}
          />
        </div>
      </div>
      <div className="col-9">
        <h2 className={styles.notification_title}> {title}</h2>
        <p>{content}</p>
        {/* <h4 className={styles.notification_date}>{date}</h4> */}
      </div>
    </div>
  );
};

Notification.defaultProps = {
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nesciunt voluptatum minima aut numquam saepe",
  title: "Selena Jovat",
  date: "11/12/21",
};

const Notifications = () => {
  const [isNotificationsOpen, setisNotificationsOpen] = useState(false);
  let domNode = useClickOutside(() => {
    setisNotificationsOpen(false);
  });
  return (
    <div
      ref={domNode}
      className={`${styles.icon_container} ${styles.notifications_container} ${
        isNotificationsOpen ? styles.icon_active : undefined
      }`}
      onClick={() => {
        setisNotificationsOpen(!isNotificationsOpen);
      }}
    >
      <BiBell />

      {/* INBOX SUBMENU */}
      <div
        className={`${styles.submenu} ${
          isNotificationsOpen ? styles.submenu_active : ""
        }`}
      >
        <div className="d-flex justify-content-between align-items-center my-3">
          <div>
            <h3 className={styles.title}>Notifications</h3>
          </div>
          <div>
            <h6
              className={styles.title}
              style={{ paddingRight: ".8rem", fontSize: "14px" }}
            >
              Clear All
            </h6>
          </div>
        </div>
        <div className={styles.notifications}>
          <Notification />
          <Notification />
          <Notification />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
