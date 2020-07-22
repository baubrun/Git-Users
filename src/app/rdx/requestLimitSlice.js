import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { gitApiUrl } from "../utils";


export const fetchRequestLimit = createAsyncThunk(
  "api.github.com/rate_limit",
  async () => {
    try {
      const response = await axios.get(`${gitApiUrl}/rate_limit`);
      const {
        rate: { remaining },
      } = response.data;
      return remaining;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const requestLimitSlice = createSlice({
  name: "requestLimit",
  initialState: {
    value: {},
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
  },
});

export const { getRequestLimit } = requestLimitSlice.actions;
export const requestLimitState = (state) => state.requestLimit.value;
export default requestLimitSlice.reducer;
