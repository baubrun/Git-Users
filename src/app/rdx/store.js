import { configureStore } from "@reduxjs/toolkit";

import {
  userReducer,
  followerReducer,
  repoReducer,
  requestLimitReducer,
  mockUserReducer,
} from "../../app/rdx";

export default configureStore({
  reducer: {
    user: userReducer,
    follower: followerReducer,
    repo: repoReducer,
    requestLimit: requestLimitReducer,
    mockUser: mockUserReducer,
  },
});
