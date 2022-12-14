import { InnerPagesTopTitle } from "../../../../../common/InnerPagesTopTitle/InnerPagesTopTitle";
import { IoCall } from "react-icons/io5";
import { OutlineLinkBtn } from "../../../../../common/btn/Btn";
// import SearchPng from "../../../../../pics/Search.png";
export const TrackingDelivery = () => {
  return (
    <>
      <div className="custom_container">
        <div className="user_managemen_top_title">
          <InnerPagesTopTitle name="Tracking of Delivery" />
        </div>
        <div className="inner_custom_container">
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            <div className="col-12">
              <Contact />
            </div>
            <div className="col-12">
              <Maps />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const Contact = () => {
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
          <div className="Tracking_Delivery_inner_title">
            <h3>On Going Job</h3>
          </div>
        </div>
        <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12">
          {/* <div className="Tracking_input_div">
            <img src={SearchPng} alt="search" />
            <input type="email" className="form-control" />
          </div> */}
        </div>
        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-12 col-12">
          <div>
            <a
              href="tel:+4733378901"
              className="BlueBtn dark_blue_link_btn mb-3"
            >
              <span>
                <IoCall />
              </span>
              Call Now
            </a>
            <OutlineLinkBtn link={-1} title="Cancel" />
          </div>
        </div>
        <div className="col-12">
          <div className="row  g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-md-6 col-sm-12 col-12">
              <div className="Tracking_Delivery_text_contact">
                <p>
                  Job Id - <span>WRE122</span>
                </p>
                <p>
                  Customer Details -<span>Lauren Deva lauren@gmail.com</span>
                </p>
                <p>
                  Contact Number -<span>7778979555</span>
                </p>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-md-6 col-sm-12 col-12">
              <div className="Tracking_Delivery_text_contact">
                <p>
                  Pickup Address -
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </span>
                </p>
                <p>
                  Drop off Address -
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const Maps = () => {
  return (
    <>
      <div className="my_maps_main_div">
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d224281.4807379062!2d76.94824431337382!3d28.557804968278447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d28.414067799999998!2d77.0422586!4m5!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!3m2!1d28.7040592!2d77.10249019999999!5e0!3m2!1sen!2sin!4v1668420267144!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="myFrame"
          className="my_maps"
        /> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d224281.4807379062!2d76.94824431337382!3d28.557804968278447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d28.414067799999998!2d77.0422586!4m5!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!3m2!1d28.7040592!2d77.10249019999999!5e0!3m2!1sen!2sin!4v1668420267144!5m2!1sen!2sin"
          className="my_maps"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="myFrame"
        />
      </div>
    </>
  );
};
