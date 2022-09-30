import { NavLink } from "react-router-dom";
const Login = () => {
  return (
    <>
      <h1>Login form</h1>
      <div className=" d-flex">
        <div className=" m-auto">
          <NavLink className="btn btn-success" to="/max/dashboard">
            MaxMover
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Login;
