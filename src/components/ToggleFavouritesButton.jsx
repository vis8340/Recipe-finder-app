import { useDispatch } from "react-redux";
import { selectFavourites, storeFavourites } from "../app/recipeManagerSlice";
import { setMessage } from "../app/accountSlice";
import { ReactComponent as SaveIcon } from "../assets/saveIcon.svg";
import axios from "axios";
import { useSelector } from "react-redux";
import { url } from "../app/config";
import { getRecipesInfo } from "../app/recipeAPI";

const ToggleFavouritesButton = (props) => {
  const favourites = useSelector(selectFavourites);
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  const fetchFavourites = async () => {
    try {
      const { data } = await axios.get(`${url}/favourites/`, {
        headers: {
          token: token,
        },
      });
      console.log(token);
      console.log(data);
      console.log(data.results);

      const favouritesIds = data.results
        .map((recipe) => recipe.recipeId)
        .join(",");
      //send data to the store
      dispatch(storeFavourites(favouritesIds));
      getRecipesInfo(favouritesIds);
    } catch (error) {
      console.log(error);
    }
  };

  const onSaveInput = async () => {
    const token = localStorage.getItem("token");
    console.log(props.id);

    if (!token) {
      dispatch(setMessage("To save recipes, please go to settings and login"));
    }

    if (favourites.includes(props.id)) {
      //delete the recipe
      try {
        const result = await axios.delete(`${url}/favourites/${props.id}`, {
          headers: {
            token: token,
          },
        });
        console.log(result.data);
        fetchFavourites();
      } catch (error) {
        console.log(error);
      }
    } else {
      //add recipe
      try {
        const results = await axios.post(
          `${url}/favourites/`,
          { recipeId: props.id },

          {
            headers: {
              token: token,
            },
          }
        );
        console.log(results.data);
        fetchFavourites();
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (!token) return;

  return (
    <>
      <button className="addButton" onClick={onSaveInput}>
        {favourites.includes(props.id) ? (
          <SaveIcon style={{ fill: "black" }} />
        ) : (
          <SaveIcon />
        )}
      </button>
    </>
  );
};

export default ToggleFavouritesButton;
