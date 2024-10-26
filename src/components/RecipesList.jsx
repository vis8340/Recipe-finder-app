import { useSelector } from "react-redux";
import { selectAllRecipes } from "../app/recipeManagerSlice";
import Loading from "./Loading";
import ToggleFavouritesButton from "./ToggleFavouritesButton";
import { Link } from "react-router-dom";

const RecipesList = () => {
  //destructure data from slice using useSelector
  const recipes = useSelector(selectAllRecipes);

  if (!recipes || recipes.length === 0) return <Loading />;

  const renderedRecipes = recipes
    .filter((recipe) => recipe.image)
    .map((recipe) => (
      <div className="recipeListContainer" key={recipe.id}>
        <div className="recipeTile">
          <Link className="recipeLink" to={"/recipe/" + recipe.id}>
            <img
              className="recipeImage"
              src={recipe.image}
              alt={recipe.title}
            />
          </Link>
          <div className="recipeListInfo">
            <Link className="recipeLink" to={"/recipe/" + recipe.id}>
              <h3 className="recipeTitle">{recipe.title}</h3>
            </Link>
            <ToggleFavouritesButton id={recipe.id} />
          </div>
        </div>
      </div>
    ));

  return <section className="recipeListsContainer">{renderedRecipes}</section>;
};
export default RecipesList;
