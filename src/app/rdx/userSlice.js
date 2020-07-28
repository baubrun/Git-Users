import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { gitRootUrl } from "../utils";

export const fetchUser = createAsyncThunk(
  "api.github.com/users/:user",
  async (user) => {
    try {
      const response = await axios.get(`${gitRootUrl}/users/${user}`);
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {},
    error: null,
  },
  reducers: {
    getUser: (state, action) => {
      state.value = action.payload;
    },
  },

  extraReducers: {
    [fetchUser.fulfilled]: (state, action) => {
      state.value = action.payload
      state.error = false
    },
    [fetchUser.rejected]: (state, action) => {
      state.error = true;
    },
  },
});

export const { getUser } = userSlice.actions;
export const userState = (state) => state.user;
export default userSlice.reducer;
