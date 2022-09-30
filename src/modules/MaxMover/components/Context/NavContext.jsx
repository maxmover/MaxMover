import { createContext } from "react";

const NavContext = createContext({
  nav: true,
  setNav: () => {},
});
export default NavContext;
