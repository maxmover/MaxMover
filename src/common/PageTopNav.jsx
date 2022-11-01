import { NavLink } from "react-router-dom";

const allData = {
  user_management: [
    {
      name: "Inquiries",
      link: "/max/Customer",
    },
    {
      name: "Employees",
      link: "/max/employees",
    },
    {
      name: "Sub-contractor",
      link: "/max/sub_contractors",
    },
    {
      name: "Receptions",
      link: "/max/receptions",
    },
    {
      name: "Refereers",
      link: "/max/refereers",
    },
  ],
  customer: [
    {
      name: "Customers",
      link: "/max/Customer",
    },
    {
      name: "Employees",
      link: "/max/employees",
    },
    {
      name: "Sub-contractor",
      link: "/max/sub_contractors",
    },
    {
      name: "Receptions",
      link: "/max/receptions",
    },
    {
      name: "Refereers",
      link: "/max/refereers",
    },
  ],
  Employees: [
    {
      name: "Customers",
      link: "/max/Customer",
    },
    {
      name: "Employees",
      link: "/max/employees",
    },
    {
      name: "Sub-contractor",
      link: "/max/sub_contractors",
    },
    {
      name: "Receptions",
      link: "/max/receptions",
    },
    {
      name: "Refereers",
      link: "/max/refereers",
    },
  ],
  Refereers: [
    {
      name: "Customers",
      link: "/max/Customer",
    },
    {
      name: "Employees",
      link: "/max/employees",
    },
    {
      name: "Sub-contractor",
      link: "/max/sub_contractors",
    },
    {
      name: "Receptions",
      link: "/max/receptions",
    },
    {
      name: "Refereers",
      link: "/max/refereers",
    },
  ],
  SubContractors: [
    {
      name: "Customers",
      link: "/max/Customer",
    },
    {
      name: "Employees",
      link: "/max/employees",
    },
    {
      name: "Sub-contractor",
      link: "/max/sub_contractors",
    },
    {
      name: "Receptions",
      link: "/max/receptions",
    },
    {
      name: "Refereers",
      link: "/max/refereers",
    },
  ],
  Inquiries: [
    {
      name: "Inquiries",
      link: "/max/inquiries",
    },
    {
      name: "Followups",
      link: "/max/followups",
    },
    {
      name: "Quotations",
      link: "/max/quotations",
    },
    {
      name: "Jobs",
      link: "/max/jobs",
    },
  ],
  JobPaymentManagement: [
    {
      name: "Job Expense Report",
      link: "/max/job_expense_report",
    },
    {
      name: "Employee",
      link: "/max/job_payment_employees",
    },
    {
      name: "Admin",
      link: "/max/job_payment_admin",
    },
    {
      name: "Sub-contractor",
      link: "/max/job_payment_sub_contractor",
    },
    {
      name: "Fuel Account",
      link: "/max/fuel_account",
    },
    {
      name: "Discount Report",
      link: "/max/discount_report",
    },
    {
      name: "Hours Report",
      link: "/max/hours_report",
    },
    {
      name: "Invoices",
      link: "/max/invoices",
    },
  ],
};
export const PageTopNav = (props) => {
  const PageTopNavListApp = (props) => {
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
      <div className="page_top_nav_div_top">
        <div className="page_top_nav">
          {allData[props.data].map((val, i) => {
            return (
              <PageTopNavListApp
                isActive={props.activeTabName === val.name}
                key={i}
                {...val}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
