import {createSlice, isAnyOf} from "@reduxjs/toolkit";
import {fetchContacts, deleteContact, addContact} from "./contactsOps.js";

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



        .addMatcher(isAnyOf(fetchContacts.rejected, deleteContact.rejected, addContact.rejected), (state, action) => {
          state.error = action.payload;
        })
        .addMatcher(isAnyOf(fetchContacts.pending, deleteContact.pending, addContact.pending), (state, action) => {
          state.error = null;
          state.isLoading = true;
        })
        .addMatcher(isAnyOf(fetchContacts.fulfilled, deleteContact.fulfilled, addContact.fulfilled), (state, action) => {
          state.isLoading = false;
        })
  },
});

export const contactsReducer = slice.reducer;
