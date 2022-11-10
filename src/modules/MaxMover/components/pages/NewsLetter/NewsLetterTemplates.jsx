import { InnerPagesTopTitle } from "../../../../../common/InnerPagesTopTitle/InnerPagesTopTitle";
import { BlueLinkBtn } from "../../../../../common/btn/Btn";

import { useNavigate } from "react-router-dom";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import { MdOutlineModeEditOutline } from "react-icons/md";
import {
  AiOutlinePlusCircle,
  AiOutlineDelete,
  AiOutlineCheck,
} from "react-icons/ai";
import { useState } from "react";
import React, { useEffect } from "react";
export const NewsLetterTemplates = () => {
  return (
    <>
      <div className="custom_container">
        <div className="inner_custom_container">
          <div className="user_managemen_top_title">
            <InnerPagesTopTitle name="News Letter Management" />
          </div>
          <div className="col-12">
            <div className="row g-3">
              <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-7 col-sm-12 col-12">
                <div className="row g-3">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-sm-12">
                    <BlueLinkBtn
                      link="/max/add_news_letter"
                      icon={<AiOutlinePlusCircle />}
                      title="Add News Letter"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 table_main_div">
                <MyTabel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const MyTabel = () => {
  const navigate = useNavigate();
  const [isTableLoaded, setIsTableLoaded] = useState(false);
  useEffect(() => {
    if (!isTableLoaded) {
      setTimeout(() => {
        setIsTableLoaded(true);
        $("#VehicleMg_Table").DataTable({
          responsive: true,
          deferRender: true,
          scroller: true,
        });
      }, 1000);
    }
  });
  const ListData = [
    {
      srno: "1",
      smstitle: "Job confirmation email has sent",
      smsDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
      editLink: "/max/edit_news_letter",
    },
    {
      srno: "2",
      smstitle: "Job confirmation email has sent",
      smsDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
      editLink: "/max/edit_news_letter",
    },
    {
      srno: "3",
      smstitle: "Job confirmation email has sent",
      smsDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
      editLink: "/max/edit_news_letter",
    },
  ];
  const ListApp = (props) => {
    return (
      <tr>
        <td>{props.srno}</td>
        <td>{props.smstitle}</td>
        <td className="w-50">{props.smsDescription}</td>
        <td>
          <div
            onClick={() => navigate(props.editLink)}
            className="tabel_td_inner"
          >
            <MdOutlineModeEditOutline />
          </div>
        </td>
        <td>
          <div className="tabel_td_inner">
            <AiOutlineCheck />
          </div>
        </td>
        <td>
          <div className="tabel_td_inner">
            <AiOutlineDelete />
          </div>
        </td>
      </tr>
    );
  };
  return (
    <>
      <div>
        <table
          id="template_sms_table"
          className="table-striped table-hover text-center  table MyTabel_top_div"
        >
          <thead>
            <tr>
              <th scope="col">Sr.No.</th>
              <th scope="col">Title</th>
              <th scope="col">News Letter</th>
              <th scope="col">Modify</th>
              <th scope="col">Status</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {ListData.map((val, i) => {
              return <ListApp key={i} {...val} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
