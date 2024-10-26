import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import GoBackButton from "./GoBackButton";
import { ReactComponent as RecipeAppLogo } from "../assets/RecipeAppLogo.svg";
import "../styles/header.css";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setShowHeader(location.pathname !== "/");
  }, [location]);

  return (
    <div className="headerContainer">
      {showHeader && (
        <>
          <div className="goBackButtonContainer">
            <GoBackButton />
          </div>
          <Link className="homepageLink" to={"/home"}>
            <div className="mainLogoContainer">
              <RecipeAppLogo/>
            </div>
          </Link>
        </>
      )}

      {!showHeader && (
        <>
          {" "}
          <div className="goBackButtonContainer"></div>
          <div className="mainLogoContainer"></div>
        </>
      )}
    </div>
  );
};

export default Header;
