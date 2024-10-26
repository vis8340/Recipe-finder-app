import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSearchInput,
  setSearchInput,
} from "../app/searchInputManagerSlice";
import { getRecipes } from "../app/recipeAPI";
import { validate } from "../validation/index";
import forwardArrow from "../assets/forwardArrow.svg";

const SearchBar = () => {
  const searchInput = useSelector(selectSearchInput);
  const [errors, setErrors] = useState("");

  const dispatch = useDispatch();

  //Search box
  const onSearchInput = async (e) => {
    e.preventDefault();

    const input = e.target.value;
    const result = await validate({ searchInput: input }, "searchRecipe");

    if (!result) {
      dispatch(setSearchInput(input));
      //console.log(input);
    }
    setErrors(result);
    //console.log(result);
  };
  return (
    <>
      <div className="searchBarContainer">
        <form
          className="searchForm"
          onSubmit={(e) => {
            e.preventDefault();
            getRecipes(searchInput);
          }}
        >
          <input
            className="searchBar"
            type="text"
            placeholder="Search Recipes..."
            autoFocus={true}
            value={searchInput}
            onInput={onSearchInput}
          />

          <button className="searchButton">
            <img
              className="forwardArrow"
              src={forwardArrow}
              alt="forwardArrow"
            />
          </button>
        </form>
      </div>
      <div className="errorMessage">
        {" "}
        {errors && <p>{errors.searchInput}</p>}
      </div>
    </>
  );
};

export default SearchBar;
