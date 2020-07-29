import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { gitRootUrl } from "../utils";

export const fetchRequestLimit = createAsyncThunk(
  "api.github.com/rate_limit",
  async () => {
    try {
      const response = await axios.get(`${gitRootUrl}/rate_limit`);
      const {
        rate: { remaining },
      } = response.data;
      return remaining;
    } catch (error) {
      return error.message;
    }
  }
);

export const requestLimitSlice = createSlice({
  name: "requestLimit",
  initialState: {
    value: 60,
    error: "",
  },
  reducers: {
    getRequestLimit: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: {
    [fetchRequestLimit.fulfilled]: (state, action) => {
      state.value = action.payload;
    },
    extraReducers: {
      [fetchRequestLimit.rejected]: (state, action) => {
        state.error = action.error;
      },
    },
  },
});

export const { getRequestLimit } = requestLimitSlice.actions;
export const requestLimitState = (state) => state.requestLimit.value;
export default requestLimitSlice.reducer;
