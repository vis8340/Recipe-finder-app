import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchInput: '', 
};

export const searchInputManagerSlice = createSlice({
    name: 'searchInputManager',
    initialState,
    reducers: {
        setSearchInput: (state, action) => {
            state.searchInput = action.payload;
        },
        
    }
})

//export actions
export const { setSearchInput, setQuantity } = searchInputManagerSlice.actions;

//export data
export const selectSearchInput = (state) => state.searchInputManager.searchInput;


export default searchInputManagerSlice.reducer;
