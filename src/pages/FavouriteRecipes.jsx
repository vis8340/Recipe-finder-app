import SqlRecipesList from "../components/SqlRecipesList";

const FavouriteRecipes = () => {
  return (
    <div>
      <div>
        <h1>Saved Recipes</h1>
      </div>
      <SqlRecipesList />
    </div>
  );
};

export default FavouriteRecipes;
