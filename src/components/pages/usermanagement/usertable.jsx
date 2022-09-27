import React, { useEffect } from "react";

//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";

//Icons
import { IoMdAddCircleOutline } from "react-icons/io";

import { BsPen } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

const Usertable = () => {
  useEffect(() => {
    $("#Customer_table").DataTable({
      responsive: true,
      deferRender: true,
      scroller: true,
    });
  }, []);

  //Datatable HTML
  return (
    <div className="MainDiv">
      <div className="">
        <table id="Customer_table" class="my-2 table_component display">
          <thead>
            <tr>
              <th>Referrer ID</th>
              <th>Date</th>
              <th>Customer Type</th>
              <th>Name</th>
              <th>Email Id</th>
              <th>Phone</th>
              <th>Action</th>
              <th>Delete</th>
              <th>More Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>RE00023</td>
              <td>22-02-22</td>
              <td>Lauren Scott</td>
              <td>Lauren</td>
              <td>lauren@gmail.com</td>
              <td>7869889790</td>
              <td>
                <BsPen />
              </td>
              <td>
                <AiOutlineDelete />
              </td>
              <td>
                More Details <IoMdAddCircleOutline />
              </td>
            </tr>

            <tr>
              <td>RE00023</td>
              <td>22-02-22</td>
              <td>Lauren Scott</td>
              <td>Lauren</td>
              <td>lauren@gmail.com</td>
              <td>7869889790</td>
              <td>
                <BsPen />
              </td>
              <td>
                <AiOutlineDelete />
              </td>
              <td>
                More Details <IoMdAddCircleOutline />
              </td>
            </tr>

            <tr>
              <td>RE00023</td>
              <td>22-02-22</td>
              <td>Lauren Scott</td>
              <td>Lauren</td>
              <td>lauren@gmail.com</td>
              <td>7869889790</td>
              <td>
                <BsPen />
              </td>
              <td>
                <AiOutlineDelete />
              </td>
              <td>
                More Details <IoMdAddCircleOutline />
              </td>
            </tr>

            <tr>
              <td>RE00023</td>
              <td>22-02-22</td>
              <td>Lauren Scott</td>
              <td>Lauren</td>
              <td>lauren@gmail.com</td>
              <td>7869889790</td>
              <td>
                <BsPen />
              </td>
              <td>
                <AiOutlineDelete />
              </td>
              <td>
                More Details <IoMdAddCircleOutline />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Usertable;

// const Usertable = () => {
//   const customerdata = [
//     {
//       ReferrerId: 1,
//       Date: "22-02-22",
//       CustomerType: "Normal",
//       Name: "Vivek",
//       EmailId: "vivekrawat666@gmail.com",
//       Phone: "9999000011",
//       Action: "Edit",
//       Delete: "Delete",
//       MoreDetails: "More Details",
//     },
//     {
//       ReferrerId: 2,
//       Date: "22-02-22",
//       CustomerType: "Normal",
//       Name: "Kamal",
//       EmailId: "kamal@gmail.com",
//       Phone: "9999000012",
//       Action: "Edit",
//       Delete: "Delete",
//       MoreDetails: "More Details",
//     },
//     {
//       ReferrerId: 3,
//       Date: "22-02-22",
//       CustomerType: "Regular",
//       Name: "Deep",
//       EmailId: "deep@gmail.com",
//       Phone: "9999000000",
//       Action: "Edit",
//       Delete: "Delete",
//       MoreDetails: "More Details",
//     },
//   ];
//   return (
//     <div className="container">
//       <table className="table table-bordered">
//         <tr>
//           <th>Referrer ID</th>
//           <th>Date</th>
//           <th>Customer Type</th>
//           <th>Name</th>
//           <th>Email Id</th>
//           <th>Phone</th>
//           <th>Action</th>
//           <th>Delete</th>
//           <th>More Details</th>
//         </tr>

//         {customerdata.map((cusdata, index) => (
//           <tr data-index={index}>
//             <td>{cusdata.ReferrerId}</td>
//             <td>{cusdata.Date}</td>
//             <td>{cusdata.CustomerType}</td>
//             <td>{cusdata.Name}</td>
//             <td>{cusdata.EmailId}</td>
//             <td>{cusdata.Phone}</td>
//             <td>{cusdata.Action}</td>
//             <td>{cusdata.Delete}</td>
//             <td>{cusdata.MoreDetails}</td>
//           </tr>
//         ))}
//       </table>
//     </div>
//   );
// };

// export default Usertable;
