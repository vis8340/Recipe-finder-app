import SearchBar from "../components/SearchBar";
import RecipesList from "../components/RecipesList";
import { getRecipesByType } from "../app/recipeAPI";
import "../styles/searchPage.css";

const SearchPage = () => {
  return (
    <>
      <div className="pageTitle">
        <h1>Search</h1>
      </div>
      <div className="controlsBar">
        <SearchBar />
      </div>
      <div className="filtersContainer">
        <h2>Recipes by Meal</h2>
        <div className="searchFilters">
          <button
            className="filterButton"
            onClick={() => {
              getRecipesByType("breakfast");
            }}
          >
            Breakfast
          </button>
          <button
            className="filterButton"
            onClick={() => {
              getRecipesByType("lunch");
            }}
          >
            Lunch
          </button>
          <button
            className="filterButton"
            onClick={() => {
              getRecipesByType("snack");
            }}
          >
            Snack
          </button>
          <button
            className="filterButton"
            onClick={() => {
              getRecipesByType("dinner");
            }}
          >
            Dinner
          </button>
        </div>
      </div>
      <div className="searchResults">
        <h2>Recipes</h2>
        <RecipesList />
      </div>
    </>
  );
};

export default SearchPage;
