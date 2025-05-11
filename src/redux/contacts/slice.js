import {createSlice, isAnyOf} from "@reduxjs/toolkit";
import {fetchContacts, deleteContact, addContact, changeContact} from "./operations.js";
import {logout} from "../auth/operations.js";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};


const slice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
        .addCase(fetchContacts.fulfilled, (state, action) => {
      state.items = action.payload;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
          state.items = state.items.filter((contact) => contact.id !== action.payload);
        })
        .addCase(addContact.fulfilled, (state, action) => {
          state.items.push(action.payload);
        })
        .addCase(changeContact.fulfilled, (state, action) => {
          const index = state.items.findIndex((contact) => contact.id === action.payload.id);
          if (index !== -1) {
            state.items[index]= action.payload;
          }
        })
        .addCase(logout.fulfilled, () => initialState)




        .addMatcher(isAnyOf(fetchContacts.rejected, deleteContact.rejected, addContact.rejected), (state, action) => {
          state.error = action.payload;
        })
        .addMatcher(isAnyOf(fetchContacts.pending, deleteContact.pending, addContact.pending), (state) => {
          state.error = null;
          state.isLoading = true;
        })
        .addMatcher(isAnyOf(fetchContacts.fulfilled, deleteContact.fulfilled, addContact.fulfilled), (state) => {
          state.isLoading = false;
        })
  },
});

export const contactsReducer = slice.reducer;
