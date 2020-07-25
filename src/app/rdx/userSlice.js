import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { gitRootUrl } from "../utils";
import { toggleError } from "../utils";

export const fetchUser = createAsyncThunk(
  "api.github.com/users/:user",
  async (user) => {
    try {
      const response = await axios.get(`${gitRootUrl}/users/${user}`);
      // if(response.data){
      //   toggleError(true, "User not found.")
      //   return
      // }
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {},
    error: "",
  },
  reducers: {
    getUser: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: {
    [fetchUser.fulfilled]: (state, action) => {
      state.value = action.payload;
    },
    [fetchUser.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { getUser } = userSlice.actions;
export const userState = (state) => state.value;
export default userSlice.reducer;
