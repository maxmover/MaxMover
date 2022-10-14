import { NavLink } from "react-router-dom";

export const PageTabs = (props) => {
  const allData = {
    Inquiries: [
      {
        name: "Inquiry Information",
        link: "/max/inquiry_information",
      },
      {
        name: "Inquiry Followup Information",
        link: "/max/inquiry_followup_information",
      },
      {
        name: "Quotation",
        link: "/max/quotation",
      },
    ],
  };
  const PageTabListApp = (props) => {
    return (
      <NavLink to={props.link}>
        <div
          style={{
            backgroundColor: props.isActive ? "#3499ff" : "white",
            color: props.isActive ? "white" : "black",
          }}
          className=" page_top_nav_link"
        >
          {props.name}
        </div>
      </NavLink>
    );
  };

  return (
    <>
      <div>
        <div className="page_tab_top_div">
          {allData[props.data].map((val, i) => {
            return (
              <PageTabListApp
                key={i}
                isActive={props.activeTabName === val.name}
                {...val}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
