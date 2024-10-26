import { Link } from "react-router-dom";
import homeIcon from "../assets/homeIcon.svg";
import searchIcon from "../assets/searchIcon.svg";
import favouritesIcon from "../assets/favouritesIcon.svg";
import settingsIcon from "../assets/settingsIcon.svg";

const Nav = () => {
  
  return (
    
    <nav className="navbar">
      <Link className="navLink" to="/home">
        <img className="navIcon" src={homeIcon} alt="homeIcon" />
      </Link>
      <Link className="navLink" to="/search">
        <img className="navIcon" src={searchIcon} alt="searchIcon" />
      </Link>
      <Link className="navLink" to="/favourites">
        <img className="navIcon" src={favouritesIcon} alt="favouritesIcon" />
      </Link>
      <Link className="navLink" to="/settings">
        <img className="navIcon" src={settingsIcon} alt="settingsIcon" />
      </Link>
    </nav>
  );
};

export default Nav;
