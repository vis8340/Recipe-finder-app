import { configureStore } from '@reduxjs/toolkit';
import recipeManagerReducer from './recipeManagerSlice';
import searchInputManagerReducer from './searchInputManagerSlice';
import accountManagerReducer from './accountSlice'

export const store = configureStore({
  reducer: {
    recipeManager: recipeManagerReducer,
    searchInputManager: searchInputManagerReducer,
    accountManager: accountManagerReducer,

  },
});
