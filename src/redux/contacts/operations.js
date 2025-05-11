import {createAsyncThunk} from "@reduxjs/toolkit";
import {baseAPI} from "../auth/operations.js";

// axios.defaults.baseURL = 'https://connections-api.goit.global';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    try {
        const response = await baseAPI.get(`/contacts`);
        return response.data;
    } catch (err) {
        console.log(err);
        return thunkAPI.rejectWithValue(err.message);
    }
})

export const addContact  = createAsyncThunk('contacts/addContact', async (body, thunkAPI) => {
    try {
        const response = await baseAPI.post(`/contacts`, body);
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
})

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
    try {
        await baseAPI.delete(`/contacts/${id}`);
        return id;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
})

export const changeContact = createAsyncThunk('contacts/changeContact', async ({id, newData}, thunkAPI) => {
    try {
        const res = await baseAPI.patch(`/contacts/${id}`, newData);
        return res.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
})
