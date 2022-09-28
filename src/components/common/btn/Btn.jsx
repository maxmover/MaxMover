import { NavLink } from "react-router-dom";
export const BluieBtn = () => {
  return (
    <>
      <h1>blue btn</h1>
    </>
  );
};
export const OutlineBtn = (props) => {
  const OutlineBtnNormal = () => {
    return (
      <>
        <button onClick={props.onClick} className="out_line_btn">
          {props.titel}
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
          {props.titel}
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
