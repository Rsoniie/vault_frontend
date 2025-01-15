import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
function ConditionalNavbar() {
    const location = useLocation();
    if (location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/" || location.pathname === "/verify") {
        return null;
    }
    return <Navbar />;
  }

  export default ConditionalNavbar;