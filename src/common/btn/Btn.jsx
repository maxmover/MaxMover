import { NavLink } from "react-router-dom";

export const BlueBtn = (props) => {
  const Fillbtn = () => {
    return (
      <>
        <button className="BlueBtn" onClick={props.onClick}>
          {props.title}
        </button>
      </>
    );
  };
  const Fillbtnicon = () => {
    return (
      <>
        <button className="BlueBtn" onClick={props.onClick}>
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
        <NavLink className="BlueBtn" to={props.link}>
          {props.title}
        </NavLink>
      </>
    );
  };
  const FillLinkbtnicon = () => {
    return (
      <>
        <NavLink className="BlueBtn" to={props.link}>
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
      <button onClick={props.onClick} className="out_line_btn">
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

export const DarkBlueBtn = (props) => {
  const Fillbtn = () => {
    return (
      <>
        <button className="BlueBtn" onClick={props.onClick}>
          {props.title}
        </button>
      </>
    );
  };
  const Fillbtnicon = () => {
    return (
      <>
        <button className="BlueBtn" onClick={props.onClick}>
          <span>{props.icon}</span>
          {props.title}
        </button>
      </>
    );
  };
  return props.icon ? <Fillbtnicon /> : <Fillbtn />;
};
export const DarkBlueLinkBtn = (props) => {
  const FillLinkbtn = () => {
    return (
      <>
        <NavLink className="BlueBtn dark_blue_link_btn" to={props.link}>
          {props.title}
        </NavLink>
      </>
    );
  };
  const FillLinkbtnicon = () => {
    return (
      <>
        <NavLink className="BlueBtn dark_blue_link_btn" to={props.link}>
          <span>{props.icon}</span>
          {props.title}
        </NavLink>
      </>
    );
  };
  return props.icon ? <FillLinkbtnicon /> : <FillLinkbtn />;
};
