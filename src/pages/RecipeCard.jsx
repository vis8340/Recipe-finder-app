import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectRecipesDetails } from "../app/recipeManagerSlice";
import ToggleFavouritesButton from "../components/ToggleFavouritesButton";
import { getRecipesDetails } from "../app/recipeAPI";
import "../styles/recipeCard.css";

const RecipeCard = () => {
  let params = useParams();
  const details = useSelector(selectRecipesDetails);

  useEffect(() => {
    getRecipesDetails(params.id);
    //console.log(details);
  }, [params.id]);

  return (
    <div className="recipeCardContainer">
      <img
        className="recipeCardImage"
        src={details.image}
        alt={details.title}
      />

      <div className="recipeCardContent">
        <div className="recipeCardIntro">
          <div className="recipeCardTitle">
            <h2>{details.title}</h2>
            <p className="recipeCardInfo">
              Serves: {details.servings} - Ready in {details.readyInMinutes}{" "}
              minutes
            </p>
          </div>

          <div className="buttonContainer">
            <ToggleFavouritesButton id={details.id} />{" "}
          </div>
        </div>

        <div className="recipeCardIngredients">
          <h3 className="ingredientsTitle">Ingredients</h3>
          {details.extendedIngredients ? (
            <ul className="ingredientsList">
              {details.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          ) : (
            <p>No ingredients found</p>
          )}
        </div>

        <div className="recipeCardInstructions">
          <h3 className="instructionsTitle">Instructions</h3>
          <div
            className="instructionsList"
            dangerouslySetInnerHTML={{ __html: details.instructions }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
