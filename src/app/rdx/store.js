import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../../app/rdx/userSlice"
import followerReducer from "../../app/rdx/followerSlice"
import repoReducer from "../../app/rdx/repoSlice"



export default configureStore({
  reducer: {
    user: userReducer,
    follower: followerReducer,
    repo: repoReducer,
  },
});
