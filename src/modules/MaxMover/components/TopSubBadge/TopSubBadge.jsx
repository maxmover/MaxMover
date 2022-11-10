import { GoPrimitiveDot } from "react-icons/go";
import { NavLink } from "react-router-dom";
export const TopSubBadge = () => {
  return (
    <>
      <div className="row Top_Sub_Badge_text_row m-0">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="Top_Sub_Badge_text">
            Your 14 days free trial is expering soon,
          </div>
        </div>
        <div className="Top_Sub_Badge_link_div col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 px-0">
          <NavLink to="/max/subscription" className="Top_Sub_Badge_link">
            Subscribe now
            <span>
              <GoPrimitiveDot />
            </span>
          </NavLink>
        </div>
      </div>
    </>
  );
};
