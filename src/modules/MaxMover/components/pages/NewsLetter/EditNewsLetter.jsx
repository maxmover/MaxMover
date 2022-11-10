import { InnerPagesTopTitle } from "../../../../../common/InnerPagesTopTitle/InnerPagesTopTitle";
import { ActionStrip } from "../../../../../common/actionStrip/ActionStrip";
import { OutlineLinkBtn, BlueBtn } from "../../../../../common/btn/Btn";

import { TextEditor, InputBox } from "../../../../../common/InputField/Form";

import "jquery/dist/jquery.min.js";

import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";

export const EditNewsLetter = () => {
  return (
    <>
      <div className="custom_container">
        <div className="inner_custom_container">
          <div className="user_managemen_top_title">
            <InnerPagesTopTitle name="News Letter Management" />
          </div>
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div>
                <ActionStrip title="Edit News Letter" />
              </div>
            </div>

            <div className="col-12">
              <div className="row g-3">
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="row g-3 justify-content-between">
                    <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
                      <InputBox label="Mail Title" type="text" required />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div>
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const Form = () => {
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="position-relative">
            <TextEditor />
          </div>
        </div>
        <div className="col-12">
          <div className="row g-4 justify-content-center">
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
              <BlueBtn title="Submit" />
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
              <OutlineLinkBtn title="Back" link={-1} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
