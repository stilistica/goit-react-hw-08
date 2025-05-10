import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://6815da1932debfe95dbc9d31.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    try {
        const response = await axios.get(`/contacts`);
        return response.data;
    } catch (err) {
        console.log(err);
        return thunkAPI.rejectWithValue(err.message);
    }
})

export const addContact  = createAsyncThunk('contacts/addContact', async (body, thunkAPI) => {
    try {
        const response = await axios.post(`/contacts`, body);
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
})

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
    try {
        await axios.delete(`/contacts/${id}`);
        return id;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
})