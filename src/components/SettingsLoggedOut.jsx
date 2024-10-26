import { Link } from "react-router-dom";
import { ReactComponent as ForwardArrow } from "../assets/forwardArrow.svg";
import "../styles/settings.css";

const SettingsLoggedOut = () => {
  return (
    <>
      <Link className="settingsLink" to={"/login"}>
        <p className="settingsListItem">Login</p>
        <ForwardArrow className="settingsListArrow" />
      </Link>
      <Link className="settingsLink" to={"/create-account"}>
        <p className="settingsListItem">Create a new Account</p>
        <ForwardArrow className="settingsListArrow" />
      </Link>
      <Link className="settingsLink" to={"/delete-account"}>
        <p className="settingsListItem">Delete Account</p>
        <ForwardArrow className="settingsListArrow" />
      </Link>
    </>
  );
};

export default SettingsLoggedOut;
