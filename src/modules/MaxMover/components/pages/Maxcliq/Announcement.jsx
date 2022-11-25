import { InnerPagesTopTitle } from "../../../../../common/InnerPagesTopTitle/InnerPagesTopTitle";
import Anus from "../../../../../pics/1.png";
import Anus1 from "../../../../../pics/2.png";
import Anus2 from "../../../../../pics/3.png";
import Anus3 from "../../../../../pics/4.png";
import { GoPrimitiveDot } from "react-icons/go";
import { Img } from "../../../../../common/Img";
import { Dropdown, Accordion } from "react-bootstrap";
import { GiEarthAsiaOceania } from "react-icons/gi";
import { BiChevronDown, BiShareAlt, BiComment } from "react-icons/bi";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";

export const Announcement = () => {
  return (
    <>
      <div className="custom_container">
        <div className="user_managemen_top_title">
          <InnerPagesTopTitle name="Max Cliq" />
        </div>
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className="col-12">
            <AnnouncementPost />
          </div>
          <div className="col-12">
            <AnnouncementPostView />
          </div>
        </div>
      </div>
    </>
  );
};
const AnnouncementPost = () => {
  const InputIconData = [
    {
      icon: Anus3,
    },
    {
      icon: Anus,
    },
    {
      icon: Anus1,
    },
    {
      icon: Anus2,
    },
  ];
  const InputIconApp = (props) => {
    return (
      <Img className="announcement_input_icon" backgroundImage={props.icon} />
    );
  };
  return (
    <>
      <div className="inner_custom_container">
        <div>
          <div className="row align-items-center g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-12 col-12">
              <div
                className="announcement_uedr_img"
                style={{
                  backgroundImage: `url("https://source.unsplash.com/random/500x500/?girl")`,
                }}
              >
                <GoPrimitiveDot />
              </div>
            </div>
            <div className="col-xxl-11 col-xl-11 col-lg-11 col-md-11 col-sm-12 col-12">
              <div className="announcement_input_top_div">
                <span className="announcement_input_icon_div">
                  {InputIconData.map((val, i) => {
                    return <InputIconApp key={i} {...val} />;
                  })}
                </span>
                <textarea
                  placeholder="Write a comment"
                  className="form-control"
                  rows="1"
                ></textarea>
              </div>
            </div>
            <div className="col-12">
              <div>
                <Dropdown className=" announcement_post_dropdown">
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <div className="tabel_td_inner">
                      <GiEarthAsiaOceania className="announcement_post_dropdown_icon_top" />
                      <span>Everyone can view</span>
                      <BiChevronDown className="announcement_post_dropdown_icon_bottom" />
                    </div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu-end animate slideIn">
                    <Dropdown.Item>Drivers</Dropdown.Item>
                    <Dropdown.Item>Movers</Dropdown.Item>
                    <Dropdown.Item>Choose employee</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const AnnouncementPostView = () => {
  const [Star, setStar] = useState(true);
  const [Heart, setHeart] = useState(true);
  const StarColor = () => {
    setStar(!Star);
  };
  const HeartColor = () => {
    setHeart(!Heart);
  };
  const AnnouncementPostListData = [
    {
      userPhoto: "https://source.unsplash.com/random/500x500/?girl",
      userName: "Jordan Owen",
      userType: "admin",
      userLastActivTime: "Just Now",
      userPostText:
        "“I learned this, at least, by my experiment; that if one advances confidently in the direction of his dreams, and endeavors to live the life which he has imagined, he will meet with a success unexpected in common hours.”—Henry David Thoreau",
    },
    {
      userPhoto: "https://source.unsplash.com/random/500x500/?boy",
      userName: "sunny charkhwal",
      userType: "admin",
      userLastActivTime: "1 minute ago",
      userPostText:
        "“I learned this, at least, by my experiment; that if one advances confidently in the direction of his dreams, and endeavors to live the life which he has imagined, he will meet with a success unexpected in common hours.”—Henry David Thoreau",
    },
  ];
  const AnnouncementPostApp = (props) => {
    return (
      <>
        <div className="col-12">
          <div className="inner_custom_container">
            <div
              className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4
        g-sm-3 g-3"
            >
              <div className="col-12">
                <div
                  className="row position-relative g-xxl-4 g-xl-4 g-lg-4 g-md-4
        g-sm-3 g-3 "
                >
                  <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12">
                    <ul className="announcement_uedr_post_ul">
                      <li>
                        <div
                          className="announcement_uedr_img_post"
                          style={{ backgroundImage: `url(${props.userPhoto})` }}
                        >
                          <GoPrimitiveDot />
                        </div>
                      </li>
                      <li>
                        <div className="announcement_post_view_name">
                          <h3> {props.userName}</h3>
                          <p>
                            <span>{props.userType}</span>
                            {props.userLastActivTime}
                          </p>
                        </div>
                      </li>
                      <li>
                        <p className="announcement_uedr_shar_btn">
                          @ Everyone
                          <span>
                            <BiShareAlt />
                          </span>
                        </p>
                      </li>
                    </ul>
                    <div className="announcement_uedr_post_star">
                      <div
                        className={`announcement_uedr_post_star_color${
                          Star ? "" : "2"
                        }`}
                      >
                        <span>
                          <AiFillStar onClick={StarColor} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div>
                  <div className="announcement_uedr_img_post_text">
                    <p>{props.userPostText}</p>
                    <div className="announcement_uedr_img_post_edit_btn">
                      <MdOutlineModeEditOutline />
                    </div>
                  </div>
                  <hr className="w-100" />
                </div>
                <div className="announcement_uedr_post_Accordion">
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <div>
                        <div className="row">
                          <div className="col-9">
                            <div className="announcement_hert">
                              <div>
                                <div
                                  className={`announcement_hert${
                                    Heart ? "" : "2"
                                  }`}
                                >
                                  <div onClick={HeartColor}>
                                    {Heart ? (
                                      <BsSuitHeart />
                                    ) : (
                                      <BsSuitHeartFill />
                                    )}
                                  </div>
                                  <p>likes</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-3">
                            <Accordion.Header>
                              <span>
                                <BiComment />
                              </span>
                              Comment
                            </Accordion.Header>
                          </div>
                        </div>
                      </div>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        {AnnouncementPostListData.map((val, i) => {
          return <AnnouncementPostApp key={i} {...val} />;
        })}
      </div>
    </>
  );
};
