import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./Nav";
const Footer = () => {
  const [showNav, setShowNav] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setShowNav(location.pathname !== "/");
  }, [location]);

  return <>{showNav && <Nav />}</>;
};

export default Footer;
