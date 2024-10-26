import { Link } from "react-router-dom";
import { ReactComponent as ForwardArrow } from "../assets/forwardArrow.svg";
import "../styles/settings.css";

const SettingsLoggedIn = () => {
  return (
    <>
      <Link className="settingsLink" to={"/favourites"}>
        <p className="settingsListItem">Saved recipes</p>
        <ForwardArrow className="settingsListArrow" />
      </Link>
      <Link className="settingsLink" to={"/logout"}>
        <p className="settingsListItem">Logout</p>
        <ForwardArrow className="settingsListArrow" />
      </Link>
      <Link className="settingsLink" to={"/delete-account"}>
        <p className="settingsListItem">Delete Account</p>
        <ForwardArrow className="settingsListArrow" />
      </Link>
    </>
  );
};

export default SettingsLoggedIn;
