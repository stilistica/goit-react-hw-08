import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const baseAPI = axios.create({
    baseURL: 'https://connections-api.goit.global',
});

const setAuthHeader = (token) => {
    baseAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const clearAuthHeader = () => {
    baseAPI.defaults.headers.common.Authorization = '';
}

export const register = createAsyncThunk('auth/register', async (body, thunkAPI) => {
    try {
        const res = await baseAPI.post(`/users/signup`, body);
        setAuthHeader(res.data.token);
        return res.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});

export const login = createAsyncThunk('auth/login', async (body, thunkAPI) => {
    try {
        const res = await baseAPI.post(`/users/login`, body);
        setAuthHeader(res.data.token);
        return res.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await baseAPI.post(`/users/logout`);
        clearAuthHeader();
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    try {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue('Token is required');
        }

        setAuthHeader(persistedToken);
        const res = await baseAPI.get(`/users/current`);
        return res.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});

