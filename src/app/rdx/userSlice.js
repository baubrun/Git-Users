import {
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit";
import axios from "axios";
import {
gitRootUrl
} from "../utils";

export const fetchUser = createAsyncThunk(
  "api.github.com/users/:user",
  async (user) => {
    try {
      const response = await axios.get(`${gitRootUrl}/users/${user}`);
      if (response) {
        const {login} = response.data
        const repos = await axios.get(`${gitRootUrl}/users/${login}/repos?per_page=100`);
        const followers = await axios.get(`${gitRootUrl}/users/${login}/followers?per_page_100`);
        return {
          followers: followers.data,
          repos: repos.data,
          user: response.data,
        }
      }
    } catch (error) {
      throw error;
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    followers: [],
    error: null,
    loading: false,
    repos: [],
    user: {}
  },
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload.user;
    },
  },

  extraReducers: {
    [fetchUser.pending]: (state, action) => {
      state.loading = true;
    },

    [fetchUser.fulfilled]: (state, action) => {
      state.error = false
      state.followers = action.payload.followers
      state.loading = false;
      state.repos = action.payload.repos
      state.user = action.payload.user
    },

    [fetchUser.rejected]: (state, action) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export const {
  getUser
} = userSlice.actions;
export const userState = (state) => state.user;
export default userSlice.reducer;