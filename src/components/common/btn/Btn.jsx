import { NavLink } from "react-router-dom";

export const BlueBtn = (props) => {
  const Fillbtn = () => {
    return (
      <>
        <button onClick={props.onClick} className="fillbtn">
          {props.title}
        </button>
      </>
    );
  };
  const Fillbtnicon = () => {
    return (
      <>
        <button className="fillbtnicon">
          <span>{props.icon}</span>
          {props.title}
        </button>
      </>
    );
  };
  return props.icon ? <Fillbtnicon /> : <Fillbtn />;
};
export const BlueLinkBtn = (props) => {
  const FillLinkbtn = () => {
    return (
      <>
        <NavLink to={props.link} className="fillbtn">
          {props.title}
        </NavLink>
      </>
    );
  };
  const FillLinkbtnicon = () => {
    return (
      <>
        <NavLink to={props.link} className="fillbtn">
          <span>{props.icon}</span>
          {props.title}
        </NavLink>
      </>
    );
  };
  return props.icon ? <FillLinkbtnicon /> : <FillLinkbtn />;
};

export const OutlineBtn = (props) => {
  const OutlineBtnNormal = () => {
    return (
      <>
        <button onClick={props.onClick} className="out_line_btn">
          {props.title}
        </button>
      </>
    );
  };
  const OutlineBtnIcon = () => {
    return (
      <button className="out_line_btn">
        <span>{props.icon}</span>
        {props.title}
      </button>
    );
  };
  return props.icon ? <OutlineBtnIcon /> : <OutlineBtnNormal />;
};
export const OutlineLinkBtn = (props) => {
  const OutlineBtnNormal = () => {
    return (
      <>
        <NavLink to={props.link} className="out_line_btn">
          {props.title}
        </NavLink>
      </>
    );
  };
  const OutlineBtnIcon = () => {
    return (
      <NavLink to={props.link} className="out_line_btn">
        <span>{props.icon}</span>
        {props.title}
      </NavLink>
    );
  };
  return props.icon ? <OutlineBtnIcon /> : <OutlineBtnNormal />;
};
