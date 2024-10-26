import axios from "axios";
import { store } from "./store";
import { storeRecipes, storeFavoritesRecipes, storeRecipesDetails } from "./recipeManagerSlice";
import { setMessage } from "./accountSlice";
import { getApiKey } from "./config";

//handle error
const handleError = (error) => {
  if (error.response.data.code === 402) {
    store.dispatch(setMessage("The API is down, please try later"))
  }

}

// get recipes from API based on search input
export const getRecipes = async (searchInput) => {
  try {
    //console.log("get recipes");
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?&apiKey=${getApiKey()}&query=${searchInput}`
    );
    console.log("API Response Data:", data);
    //send data to the store
    store.dispatch(storeRecipes(data.results));
  } catch (error) {
    handleError(error);
  }
};

// get random recipes results from API
export const getRandomRecipes = async () => {
  try {
    //console.log("get recipes");

    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/random?number=4&apiKey=${getApiKey()}`
    );
    //send data to the store
    store.dispatch(storeRecipes(data.recipes));
  } catch (error) {
    handleError(error);
  }
};

//get recipes by meal type
export const getRecipesByType = async (type) => {
  try {
    //console.log("get recipes by type");
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?&apiKey=${getApiKey()}&type=${type}`
    );
    console.log(data, `https://api.spoonacular.com/recipes/complexSearch?&apiKey=${getApiKey()}&type=${type}`
    );
    //send data to the store
    store.dispatch(storeRecipes(data.results));
  } catch (error) {
    handleError(error);

  }
};

// get recipes by diet
export const getRecipesByDiet = async (diet) => {
  try {
    //console.log("get recipes by diet");

    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?&apiKey=${getApiKey()}&diet=${diet}`
    );
    console.log(data, `https://api.spoonacular.com/recipes/complexSearch?&apiKey=${getApiKey()}&diet=${diet}`);
    //send data to the store
    store.dispatch(storeRecipes(data.results));
  } catch (error) {
    handleError(error);

  }
};

// get bulk recipes info
export const getRecipesInfo = async (ids) => {
  try {
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/informationBulk?ids=${ids}&apiKey=${getApiKey()}`);
    store.dispatch(storeFavoritesRecipes(data));
  } catch (error) {
    handleError(error);

  }
};

// get single recipe details
export const getRecipesDetails = async (id) => {
  try {
    //console.log("get recipes details");

    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?&apiKey=${getApiKey()}`
    );
    //storeRecipesDetails(data);
    store.dispatch(storeRecipesDetails(data));
  } catch (error) {
    console.log(error);
  }
};

