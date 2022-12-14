import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import NavContext from "../../../modules/MaxMover/components/Context/NavContext";
import RightNavbar from "../components/RightNavbar/RightNavbar";
import { TopSubBadge } from "../components/TopSubBadge/TopSubBadge";
import { Dashboard } from "../pages/Dashboard";
import Container from "../../MaxMover/components/Container/Container";
import { Customer } from "../components/pages/UserManagement/Customer";
import { AddnewPolicy } from "../components/pages/Maxcliq/AddnewPolicy";

import { AddNewVehicle } from "../components/pages/VehicleManagement/AddNewVehicle";
import { AddNewCategory } from "../components/pages/Servicecategory/AddNewCategory";
import { EditCategory } from "../components/pages/Servicecategory/EditCategory";
import { Vehiclemanagement } from "../pages/Vehiclemanagement";
import { Servicecategory } from "../pages/Servicecategory";
import { Accountmanagement } from "../pages/Accountmanagement";
import { TemplatesNotes } from "../pages/Templatesnotes";
import { Smsmanagement } from "../pages/Smsmanagement";

import { BankDetails } from "../components/pages/UserManagement/customerPage/BankDetails";
import { AddCustomer } from "../components/pages/UserManagement/customerPage/AddCustomer";
import { EditCustomer } from "../components/pages/UserManagement/customerPage/EditCustomer";
import { Employees } from "../components/pages/UserManagement/Employees";
import { Receptions } from "../components/pages/UserManagement/Receptions";
import { Refereers } from "../components/pages/UserManagement/Refereers";
import { SubContractors } from "../components/pages/UserManagement/SubContractors";
import { EditVehicle } from "../components/pages/VehicleManagement/EditVehicle";
import { Editsms } from "../components/pages/Smsmanagement/Editsms";
import { AddnewSms } from "../components/pages/Smsmanagement/Addnewsms";
import { AddnewNotes } from "../components/pages/TemplateNotes/Addnewnotes";
import { Editnotes } from "../components/pages/TemplateNotes/Editnotes";
import { AddNewExpense } from "../components/pages/Accountmanagement/AddNewExpense";
import { EditExpense } from "../components/pages/Accountmanagement/EditExpense";

import { AddEmployees } from "../components/pages/UserManagement/EmployeesPage/AddEmployees";
import { EditEmployees } from "../components/pages/UserManagement/EmployeesPage/EditEmployees";
import { WorkingRate } from "../components/pages/UserManagement/EmployeesPage/WorkingRate";
import { EmployeesBankDetails } from "../components/pages/UserManagement/EmployeesPage/EmployeesBankDetails";
import { AddSubContractors } from "../components/pages/UserManagement/SubContractorsPage/AddSubContractors";
import { EditSubContractors } from "../components/pages/UserManagement/SubContractorsPage/EditSubContractors";
import { SubContractorsBankDetails } from "../components/pages/UserManagement/SubContractorsPage/SubContractorsBankDetails";
import { SubContractorsWorkingRate } from "../components/pages/UserManagement/SubContractorsPage/SubContractorsWorkingRate";
import { AddNewReception } from "../components/pages/UserManagement/ReceptionsPage/AddNewReception";
import { EditNewReception } from "../components/pages/UserManagement/ReceptionsPage/EditNewReception";
import { AddNewRefereers } from "../components/pages/UserManagement/RefereersPage/AddNewRefereers";
import { EditRefereers } from "../components/pages/UserManagement/RefereersPage/EditRefereers";

import { Followups } from "../components/pages/InquiryManagement/Followups";
import { Inquiries } from "../components/pages/InquiryManagement/Inquiries";
import { Jobs } from "../components/pages/InquiryManagement/Jobs";
import { Quotations } from "../components/pages/InquiryManagement/Quotations";

import { InquiryFollowupInformation } from "../components/pages/InquiryManagement/InquiriesPages/InquiryFollowupInformation";
import { InquiryInformation } from "../components/pages/InquiryManagement/InquiriesPages/InquiryInformation";
import { Quotation } from "../components/pages/InquiryManagement/InquiriesPages/Quotation";
import { ViewHistory } from "../components/pages/InquiryManagement/InquiriesPages/ViewHistory";
import { TakeAction } from "../components/pages/InquiryManagement/InquiriesPages/TakeAction";
import { Policymanagement } from "../components/pages/Maxcliq/PolicyInManagement";

import { CreateBooking } from "../components/pages/InquiryManagement/InquiriesPages/CreateBooking";
import { GenerateQuotatio } from "../components/pages/InquiryManagement/InquiriesPages/GenerateQuotatio";
import { NextFollowup } from "../components/pages/InquiryManagement/InquiriesPages/NextFollowup";

import { FollowupsAction } from "../components/pages/InquiryManagement/FollowupsPages/FollowupsAction";
import { FollowupsGenerateQuotation } from "../components/pages/InquiryManagement/FollowupsPages/FollowupsGenerateQuotation";
import { FollowupsNextFollowup } from "../components/pages/InquiryManagement/FollowupsPages/FollowupsNextFollowup";
import { AddNewQuotations } from "../components/pages/InquiryManagement/QuotationsPage/AddNewQuotations";
import { EditNewQuotations } from "../components/pages/InquiryManagement/QuotationsPage/EditNewQuotations";
import { JobsViewHistory } from "../components/pages/InquiryManagement/JobsPages/JobsViewHistory";
import { AddNewJob } from "../components/pages/InquiryManagement/JobsPages/AddNewJob";
import { EditNewJob } from "../components/pages/InquiryManagement/JobsPages/EditNewJob";
import { JobDetails } from "../components/pages/InquiryManagement/JobsPages/JobDetails";
import { JobExpenseReport } from "../components/pages/JobPaymentManagement/JobExpenseReport";
import { AddReceivedPayment } from "../components/pages/JobPaymentManagement/JobExpenseReportPages/AddReceivedPayment";
import { JobPaymentEmployees } from "../components/pages/JobPaymentManagement/JobPaymentEmployees";
import { JobPaymentAdmin } from "../components/pages/JobPaymentManagement/JobPaymentAdmin";
import { JobPaymentSubContractor } from "../components/pages/JobPaymentManagement/JobPaymentSubContractor";
import { FuelAccount } from "../components/pages/JobPaymentManagement/FuelAccount";
import { DiscountReport } from "../components/pages/JobPaymentManagement/DiscountReport";
import { HoursReport } from "../components/pages/JobPaymentManagement/HoursReport";
import { Invoices } from "../components/pages/JobPaymentManagement/Invoices";
import { InvoicesDetails } from "../components/pages/JobPaymentManagement/InvoicesDetails";
import { Subscription } from "../components/pages/SubscriptionPlans/Subscription";
import { AllNotifications } from "../components/pages/Notifications/AllNotifications";
import { TrackingDelivery } from "../components/pages/TrackingDelivery/TrackingDelivery";
import { Announcement } from "../components/pages/Maxcliq/Announcement";
import { EditPolicy } from "../components/pages/Maxcliq/EditPolicy";
import { SendSms } from "../components/pages/Smsmanagement/SendSms";
import { NewsLetterTemplates } from "../components/pages/NewsLetter/NewsLetterTemplates";
import { SendNewsLetter } from "../components/pages/NewsLetter/SendNewsLetter";
import { EditNewsLetter } from "../components/pages/NewsLetter/EditNewsLetter";
import { AddNewsLetter } from "../components/pages/NewsLetter/AddNewsLetter";
import { TrainingManagement } from "../components/pages/Maxcliq/TrainingManagement";
import { AddTraining } from "../components/pages/Maxcliq/AddTraining";
import { EditTraining } from "../components/pages/Maxcliq/EditTraining";
import { EditInquiryInformation } from "../components/pages/InquiryManagement/InquiriesPages/EditInquiryInformation";
import { Chat } from "../components/pages/chat/Chat";

export const MaxMoverRouts = () => {
  const [nav, setNav] = useState(false);
  const value = { nav, setNav };
  const [
    isSubExp,
    // setIsSubExp
  ] = useState(false);
  return (
    <>
      {isSubExp ? <TopSubBadge /> : null}

      <div className="App">
        <NavContext.Provider value={value}>
          <Navbar />
          <Container
            stickyNav={<RightNavbar />}
            content={
              <>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/customer" element={<Customer />} />
                  <Route path="/addnewvehicle" element={<AddNewVehicle />} />
                  <Route path="/bank_details" element={<BankDetails />} />
                  <Route path="/add_customer" element={<AddCustomer />} />
                  <Route path="/edit_customer" element={<EditCustomer />} />
                  <Route
                    path="/add_new_category"
                    element={<AddNewCategory />}
                  />
                  <Route path="/edit_category" element={<EditCategory />} />
                  <Route path="/employees" element={<Employees />} />
                  <Route path="/receptions" element={<Receptions />} />
                  <Route path="/refereers" element={<Refereers />} />
                  <Route path="/sub_contractors" element={<SubContractors />} />
                  <Route path="/edit_vehicle" element={<EditVehicle />} />
                  <Route
                    path="/service_category"
                    element={<Servicecategory />}
                  />
                  <Route path="/add_employees" element={<AddEmployees />} />
                  <Route path="/edit_employees" element={<EditEmployees />} />
                  <Route path="/edit_sms" element={<Editsms />} />
                  <Route path="/add_new_sms" element={<AddnewSms />} />
                  <Route path="/add_new_policy" element={<AddnewPolicy />} />
                  <Route path="/add_new_notes" element={<AddnewNotes />} />
                  <Route path="/edit_notes" element={<Editnotes />} />
                  <Route path="/add_expense" element={<AddNewExpense />} />
                  <Route path="/edit_expense" element={<EditExpense />} />
                  <Route
                    path="/employees_bank_details"
                    element={<EmployeesBankDetails />}
                  />
                  <Route path="/working_rate" element={<WorkingRate />} />
                  <Route
                    path="/employees_bank_details"
                    element={<EmployeesBankDetails />}
                  />
                  <Route path="/working_rate" element={<WorkingRate />} />
                  <Route
                    path="/vehiclemanagement"
                    element={<Vehiclemanagement />}
                  />
                  <Route path="/smsmanagement" element={<Smsmanagement />} />
                  <Route path="/policymanage" element={<Policymanagement />} />
                  <Route path="/templates_notes" element={<TemplatesNotes />} />
                  <Route
                    path="/account_management"
                    element={<Accountmanagement />}
                  />
                  <Route
                    path="/add_sub_contractors"
                    element={<AddSubContractors />}
                  />
                  <Route
                    path="/edit_sub_contractors"
                    element={<EditSubContractors />}
                  />
                  <Route
                    path="/sub_contractors_bank_details"
                    element={<SubContractorsBankDetails />}
                  />
                  <Route
                    path="/sub_contractors_working_rate"
                    element={<SubContractorsWorkingRate />}
                  />
                  <Route
                    path="/add_new_reception"
                    element={<AddNewReception />}
                  />
                  <Route
                    path="/edit_new_reception"
                    element={<EditNewReception />}
                  />
                  <Route
                    path="/add_new_refereers"
                    element={<AddNewRefereers />}
                  />
                  <Route path="/edit_refereers" element={<EditRefereers />} />
                  <Route path="/followups" element={<Followups />} />
                  <Route path="/inquiries" element={<Inquiries />} />
                  <Route path="/jobs" element={<Jobs />} />
                  <Route path="/quotations" element={<Quotations />} />
                  <Route
                    path="/inquiry_followup_information"
                    element={<InquiryFollowupInformation />}
                  />
                  <Route
                    path="/inquiry_information"
                    element={<InquiryInformation />}
                  />
                  <Route
                    path="/edit_inquiry_information"
                    element={<EditInquiryInformation />}
                  />
                  <Route path="/quotation" element={<Quotation />} />
                  <Route path="/view_history" element={<ViewHistory />} />
                  <Route path="/take_action" element={<TakeAction />} />
                  <Route path="/create_booking" element={<CreateBooking />} />
                  <Route
                    path="/generate_quotatio"
                    element={<GenerateQuotatio />}
                  />
                  <Route path="/next_followup" element={<NextFollowup />} />
                  <Route
                    path="/followups_action"
                    element={<FollowupsAction />}
                  />
                  <Route
                    path="/followups_generate_quotation"
                    element={<FollowupsGenerateQuotation />}
                  />
                  <Route
                    path="/followups_next_followup"
                    element={<FollowupsNextFollowup />}
                  />
                  <Route
                    path="/add_new_quotations"
                    element={<AddNewQuotations />}
                  />
                  <Route
                    path="/edit_quotations"
                    element={<EditNewQuotations />}
                  />
                  <Route
                    path="/jobs_view_history"
                    element={<JobsViewHistory />}
                  />
                  <Route path="/add_new_job" element={<AddNewJob />} />
                  <Route path="/edit_job" element={<EditNewJob />} />
                  <Route path="/job_details" element={<JobDetails />} />
                  <Route
                    path="/job_expense_report"
                    element={<JobExpenseReport />}
                  />
                  <Route
                    path="/add_received_payment"
                    element={<AddReceivedPayment />}
                  />
                  <Route
                    path="/job_payment_employees"
                    element={<JobPaymentEmployees />}
                  />
                  <Route
                    path="/job_payment_admin"
                    element={<JobPaymentAdmin />}
                  />
                  <Route
                    path="/job_payment_sub_contractor"
                    element={<JobPaymentSubContractor />}
                  />
                  <Route path="/fuel_account" element={<FuelAccount />} />
                  <Route path="/discount_report" element={<DiscountReport />} />
                  <Route path="/hours_report" element={<HoursReport />} />
                  <Route path="/invoices" element={<Invoices />} />
                  <Route
                    path="/invoices_details"
                    element={<InvoicesDetails />}
                  />
                  <Route path="/subscription" element={<Subscription />} />
                  <Route
                    path="/all_notifications"
                    element={<AllNotifications />}
                  />
                  <Route
                    path="/tracking_delivery"
                    element={<TrackingDelivery />}
                  />
                  <Route path="/announcement" element={<Announcement />} />
                  <Route path="/edit_policy" element={<EditPolicy />} />
                  <Route path="/send_sms" element={<SendSms />} />
                  <Route
                    path="/news_letter_templates"
                    element={<NewsLetterTemplates />}
                  />
                  <Route
                    path="/send_news_letter"
                    element={<SendNewsLetter />}
                  />
                  <Route
                    path="/edit_news_letter"
                    element={<EditNewsLetter />}
                  />
                  <Route path="/add_news_letter" element={<AddNewsLetter />} />
                  <Route
                    path="/training_management"
                    element={<TrainingManagement />}
                  />
                  <Route path="/add_training" element={<AddTraining />} />
                  <Route path="/edit_training" element={<EditTraining />} />
                  <Route path="/messages" element={<Chat />} />

                  <Route path="*" element={<main>NOT FOUND</main>} />
                </Routes>
              </>
            }
          />
        </NavContext.Provider>
      </div>
    </>
  );
};
