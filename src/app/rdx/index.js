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

export {

 //slices
 followerSlice,
  repoSlice,
  requestLimitSlice,
  userSlice,
  
  // states
  followerState,
  repoState,
  requestLimitState,
  userState,

  // actions
  getFollower,
  getRepos,
  fetchRequestLimit,
  fetchUser,

  //reducers
  followerReducer,
  repoReducer,
  requestLimitReducer,
  userReducer,
};
