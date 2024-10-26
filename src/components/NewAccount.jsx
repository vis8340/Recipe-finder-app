import SearchBar from "./SearchBar";
import RecipesList from "./RecipesList";

const NewAccount = () => {
  return (
    <>
      <h1>Welcome to Love Food</h1>
      <p className="userMessage">Your account has been successfully created.</p>

      <h2>Start saving recipes here:</h2>
      <SearchBar />
      <RecipesList />
    </>
  );
};

export default NewAccount;
