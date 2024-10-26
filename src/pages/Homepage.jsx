import RecipesList from "../components/RecipesList";
import HeroContent from "../components/HeroContent";
import RecipesByDiet from "../components/RecipesByDiet";

const Homepage = () => {
  return (
    <>
      <HeroContent />
      <RecipesByDiet />
      <div className="popularRecipes">
        <h2>Recipes</h2>
        <RecipesList />
      </div>
    </>
  );
};

export default Homepage;
