import logo from "../assets/logo.svg";
import { ReactComponent as RecipeAppLogo } from "../assets/RecipeAppLogo.svg";
import { Link } from "react-router-dom";
import "../styles/onboarding.css";

const Onboarding = () => {
  return (
    <>
      <div className="onboardingContainer">
        <div className="logoContainer">
          <RecipeAppLogo />

          <img className="logo" src={logo} alt="logo" />
        </div>

        <div className="onboardingButtonsContainer">
          <h1 className="onboardingTitle">Let's get cooking</h1>

          <div>
            <Link to={"home"}>
              <button className="onboardingButton">Start here</button>
            </Link>
          </div>

          <div>
            <Link to={"create-account"}>
              <button className="onboardingButton">Create an Account</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Onboarding;
