import heroImage from "../assets/heroImage.png";
import heroImageTablet from "../assets/heroImageTablet.png";
import heroImageDesktop from "../assets/heroImageDesktop.png";
import { getRecipesByType } from "../app/recipeAPI";
import { Link } from "react-router-dom";

import "../styles/heroContent.css";
const HeroContent = () => {
  return (
    <div className="heroContainer">
      <div className="heroMessage">
        <h2 className="heroTitle">Easy Dinners</h2>
        <p className="heroDescription">
          Browse our selection of easy and delicious dinner ideas, including
          speedy stir-fries, vegetarian mains, and comforting curries.{" "}
        </p>
        <Link className="categoryLink" to={"/searchResults"}>
          <p
            className="heroButton"
            onClick={() => {
              getRecipesByType("dinner");
            }}
          >
            Find recipes{" "}
          </p>
        </Link>
      </div>

      <div>
        {" "}
        <img className="heroImage" src={heroImage} alt="healthy-food" />
        <img
          className="heroImageTablet"
          src={heroImageTablet}
          alt="healthy-food"
        />
        <img
          className="heroImageDesktop"
          src={heroImageDesktop}
          alt="healthy-food"
        />
      </div>
    </div>
  );
};
export default HeroContent;
