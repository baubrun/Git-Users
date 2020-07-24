import followerReducer, {
  followerSlice,
  followerState,
  getFollower,
} from "./followerSlice";

import repoReducer, { repoSlice, repoState, getRepos } from "./repoSlice";


import requestLimitReducer, {
  requestLimitSlice,
  requestLimitState,
  fetchRequestLimit,
} from "./requestLimitSlice";

import userReducer, { userSlice, userState, fetchUser } from "./userSlice";
import mockUserReducer, { mockUserSlice, mockUserState, getMockUser } from "./mockUserSlice";

export {

 //slices
 followerSlice,
  repoSlice,
  requestLimitSlice,
  userSlice,
  mockUserSlice,
  
  // states
  followerState,
  repoState,
  requestLimitState,
  userState,
  mockUserState,

  // actions
  getFollower,
  getRepos,
  fetchRequestLimit,
  fetchUser,
  getMockUser,

  //reducers
  followerReducer,
  repoReducer,
  requestLimitReducer,
  userReducer,
  mockUserReducer,
};
