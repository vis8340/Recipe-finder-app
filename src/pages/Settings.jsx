import SettingsLoggedIn from "../components/SettingsLoggedOut";
import SettingsLoggedOut from "../components/SettingsLoggedIn";
import "../styles/settings.css";

const Settings = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      <div className="settingsContainer">
        <h1>Settings</h1>

        {/* <img className="" src={} alt="veggie-background" /> */}
        <div className="settingsList">
          {!token ? <SettingsLoggedIn /> : <SettingsLoggedOut />}
        </div>
      </div>
    </>
  );
};

export default Settings;
