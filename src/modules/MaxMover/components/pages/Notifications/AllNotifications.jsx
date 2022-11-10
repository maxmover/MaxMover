import { InnerPagesTopTitle } from "../../../../../common/InnerPagesTopTitle/InnerPagesTopTitle";
import { GrClose } from "react-icons/gr";

export const AllNotifications = () => {
  return (
    <>
      <div className="custom_container">
        <div className="inner_custom_container">
          <div className="user_managemen_top_title">
            <InnerPagesTopTitle name="Notifications" />
          </div>
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
            <div className="col-12">
              <NotificationsList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const NotificationsList = () => {
  const NotificationsListApp = (props) => {
    let defaultImage = "https://source.unsplash.com/random/500x500/?dog";
    return (
      <>
        <div className="col-12">
          <div className="notifications_main_div">
            <div className="row align-items-center ">
              <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-2 col-sm-12 col-12">
                <div
                  className="notifications_img_icon"
                  style={{
                    backgroundImage: `url(${props.background || defaultImage})`,
                  }}
                ></div>
              </div>
              <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-7 col-sm-12 col-12">
                <div className="Notifications_text">
                  <h3>{props.name}</h3>
                  <p>{props.text}</p>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-12 col-12">
                <div className="Notifications_time">
                  <span>
                    <GrClose />
                  </span>
                  <p>{props.time}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const NotificationsListData = [
    {
      background: "https://source.unsplash.com/random/500x500/?girl",
      name: "Selena Jova",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam amet, felis nulla fusce. Nunc in rutrLorem ipsum do",
      time: "12 min ago",
    },
    {
      background: "https://source.unsplash.com/random/500x500/?girl",
      name: "Selena Jova",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam amet, felis nulla fusce. Nunc in rutrLorem ipsum do",
      time: "12 min ago",
    },
    {
      background: "https://source.unsplash.com/random/500x500/?girl",
      name: "Selena Jova",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam amet, felis nulla fusce. Nunc in rutrLorem ipsum do",
      time: "12 min ago",
    },
    {
      background: "https://source.unsplash.com/random/500x500/?girl",
      name: "Selena Jova",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam amet, felis nulla fusce. Nunc in rutrLorem ipsum do",
      time: "12 min ago",
    },
    {
      background: "https://source.unsplash.com/random/500x500/?girl",
      name: "Selena Jova",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam amet, felis nulla fusce. Nunc in rutrLorem ipsum do",
      time: "12 min ago",
    },
    {
      background: "https://source.unsplash.com/random/500x500/?girl",
      name: "Selena Jova",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam amet, felis nulla fusce. Nunc in rutrLorem ipsum do",
      time: "12 min ago",
    },
    {
      background: "https://source.unsplash.com/random/500x500/?girl",
      name: "Selena Jova",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam amet, felis nulla fusce. Nunc in rutrLorem ipsum do",
      time: "12 min ago",
    },
  ];
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
        {NotificationsListData.map((val, i) => {
          return <NotificationsListApp key={i} {...val} />;
        })}
      </div>
    </>
  );
};
