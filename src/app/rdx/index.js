import repoReducer, { repoSlice, repoState, getRepos } from "./repoSlice";
import followerReducer, {
  followerSlice,
  followerState,
  getFollower,
} from "./followerSlice";
import userReducer, { userSlice, userState, getUser } from "./userSlice";
import requestLimitReducer, {
  requestLimitSlice,
  requestLimitState,
  fetchRequestLimit,
} from "./requestLimitSlice";

export {
 //slices
  repoSlice,
  followerSlice,
  userSlice,
  requestLimitSlice,
  // states
  repoState,
  followerState,
  userState,
  requestLimitState,
  // actions
  getRepos,
  getFollower,
  getUser,
  fetchRequestLimit,
  //reducers
  repoReducer,
  followerReducer,
  userReducer,
  requestLimitReducer,
};
