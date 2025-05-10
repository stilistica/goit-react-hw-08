import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      return {
        name: action.payload,
      };
    },
  },
});

export const { changeFilter } = slice.actions;
export const filtersReducer = slice.reducer;
