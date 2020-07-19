import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../../app/rdx/userSlice"
import followerReducer from "../../app/rdx/followerSlice"

export default configureStore({
  reducer: {
    user: userReducer,
    follower: followerReducer
  },
});
