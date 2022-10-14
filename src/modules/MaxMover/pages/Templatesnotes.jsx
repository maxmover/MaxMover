import { InnerPagesTopTitle } from "../../../common/InnerPagesTopTitle/InnerPagesTopTitle";
// import { PageTopBtn } from "../components/pages/UserManagement/Customer";
import { BlueBtn } from "../../../common/btn/Btn";
// import { AddNewVehicle } from "../../components/pages/Vehiclemanagement/AddNewVehicle";
// import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "jquery/dist/jquery.min.js";

import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
// import { FaRegEdit } from "react-icons/fa";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { AiOutlinePlusCircle, AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";
import React, { useEffect } from "react";
export const TemplatesNotes = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="custom_container">
        <div className="inner_custom_container">
          <div className="user_managemen_top_title">
            <InnerPagesTopTitle name="Templates & Notes" />
          </div>
          <div className="col-12">
            <div className="row g-3">
              <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-7 col-sm-12 col-12">
                <div className="row g-3">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-sm-12">
                    <div onClick={() => navigate("/max/add_new_notes")}>
                      <BlueBtn
                        icon={<AiOutlinePlusCircle />}
                        title="Add new Notes"
                      />
                    </div>
                  </div>
                  {/* <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                    <div>
                      <BlueBtn title="Excel" />
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                    <div>
                      <BlueBtn title="Print" />
                    </div>
                  </div> */}
                </div>
              </div>
              {/* <div className="col-xl-6"></div> */}
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
      titleName: "Job confirmation email has sent",
      noteDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
      editLink: "/max/edit_notes",
    },
    {
      srno: "2",
      titleName: "Job confirmation email has sent",
      noteDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
      editLink: "/max/edit_notes",
    },
    {
      srno: "3",
      titleName: "Job confirmation email has sent",
      noteDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
      editLink: "/max/edit_notes",
    },
  ];
  const ListApp = (props) => {
    return (
      <tr>
        <td>{props.srno}</td>
        <td>{props.titleName}</td>
        <td className="w-50">{props.noteDescription}</td>
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
          id="template_notes_table"
          className="table-striped table-hover text-center  table MyTabel_top_div"
        >
          <thead>
            <tr>
              <th scope="col">Sr.No.</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
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
