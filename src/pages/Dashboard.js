import React, { useEffect, useState } from "react";
import { Info, Navbar, Repos, Search, User } from "../components";
// import loadingImage from "../images/preloader.gif";
import { useSelector, useDispatch } from "react-redux";
import {
  // state
  followerState,
  repoState,
  requestLimitState,
  userState,
  mockUserState,

  // actions
  getFollower,
  getRepos,
  fetchRequestLimit,
  getMockUser,
} from "../app/rdx";

import mockUser from "../app/mockData/mockUser";
import mockFollower from "../app/mockData/mockFollowers";
import mockRepos from "../app/mockData/mockRepos";

import {toggleError} from "../app/utils"

const Dashboard = () => {
  const userInfo = useSelector(mockUserState);
  // const userInfo = useSelector(userState);
  const followers = useSelector(followerState);
  const repos = useSelector(repoState);
  const requestLimit = useSelector(requestLimitState);
  const dispatch = useDispatch();
  // const [error, setError] = useState({ show: false, msg: "" });


  useEffect(() => {
    dispatch(getMockUser(mockUser));
    dispatch(getFollower(mockFollower));
    dispatch(getRepos(mockRepos));
    dispatch(fetchRequestLimit());
    if (requestLimit <= 0)
      toggleError(true, "Exceeded hourly limit" );
  }, [requestLimit]);


  return (
    <main>
      <Navbar />
      <Search requestLimit={requestLimit} />
      <Info repoInfo={userInfo} />
      <User followers={followers} userInfo={userInfo} />
      <Repos repos={repos} />
    </main>
  );
};

export default Dashboard;
