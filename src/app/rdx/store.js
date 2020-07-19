import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../../app/rdx/userSlice"


export default configureStore({
  reducer: {
    user: userReducer,
  },
});
