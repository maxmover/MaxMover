import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

// Icons // Images
import { MdOutlineDashboardCustomize, MdOutlineSettings } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { GrDropbox } from "react-icons/gr";
import ProfilePic from "../../../../pics/people4.jpg";

// Style
import "./Sidebartabs.scss";

function FillExample() {
  const Groupchat = (props) => (
    <div className="chatDeats d-flex align-items-center">
      <div className="dashedBullet" style={{ borderColor: props.color }}></div>
      <div className="groupName">{props.groupChatname}</div>
    </div>
  );
  const ChatPreviews = ({ username, messagepreview, date }) => {
    return (
      <div className="chatPreviews d-flex">
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
          <h6 className="Username" style={{ fontSize: "14px" }}>
            {" "}
            {username}
          </h6>
          <p style={{ fontSize: "12px" }}>{messagepreview}</p>
          {/* <h4 className={styles.notification_date}>{date}</h4> */}
        </div>
      </div>
    );
  };
  ChatPreviews.defaultProps = {
    messagepreview: "Lorem ipsum dolor sit amet.... ",
    username: "Selena Jovat",
    date: "11/12/21",
  };

  return (
    <Tabs
      defaultActiveKey="tab1"
      id="fill-tab-example"
      className=" sidebarTabs"
      fill>
      <Tab
        eventKey="tab1"
        title={
          <span>
            <BiMessageDetail />{" "}
          </span>
        }>
        <div className="blueTape">
          <h5>CHATTING SETTING </h5>
        </div>
        <div className="chatMainContent">
          <div className="chatBoxPreviews">
            <h5>GROUP CHATS</h5>

            <div className="groupChats">
              <Groupchat groupChatname="Drivers" color="#FF0000" />
              <Groupchat groupChatname="Movers & Packers" color="#53D15F" />
              <Groupchat groupChatname="Customers " color="#139EE3" />
              <Groupchat groupChatname="Sub-contactors " color="##FF6FA3" />
            </div>
          </div>

          <div className="chatBoxPreviews">
            <h5>CUSTOMERS</h5>

            <div className="groupChats">
              <ChatPreviews />
              <ChatPreviews />
              <ChatPreviews />
            </div>
          </div>

          <div className="chatBoxPreviews">
            <h5>OTHER CHATS</h5>

            <div className="groupChats">
              <ChatPreviews />
              <ChatPreviews />
              <ChatPreviews />
            </div>
          </div>
        </div>
      </Tab>
      <Tab
        eventKey="tab2"
        title={
          <span>
            <MdOutlineDashboardCustomize />{" "}
          </span>
        }>
        <div className="blueTape">
          <h5>&nbsp;</h5>
        </div>
        <div className="dashfeat py-3 px-2">
          <div className="my-2">
            <a
              href="https://gsuite.google.com/"
              target="_blank"
              rel="noreferrer">
              <span>
                <FcGoogle />
              </span>{" "}
              &nbsp; G Suit
            </a>
          </div>

          <div className="my-2">
            <a
              href="https://gsuite.google.com/"
              target="_blank"
              rel="noreferrer">
              <span style={{ color: "#0061FF" }}>
                <GrDropbox />
              </span>{" "}
              &nbsp; Dropbox
            </a>
          </div>
        </div>
      </Tab>
      <Tab
        eventKey="tab3"
        title={
          <span>
            <MdOutlineSettings />{" "}
          </span>
        }>
        <div className="blueTape">
          <h5>THEME SETTING </h5>
        </div>
      </Tab>
    </Tabs>
  );
}

export default FillExample;
