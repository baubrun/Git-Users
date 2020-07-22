import React, { useEffect, useState } from "react";
import { Info, Navbar, Repos, Search, User } from "../components";
import loadingImage from "../images/preloader.gif";
import { useSelector, useDispatch } from "react-redux";
import {
  repoState,
  followerState,
  userState,
  requestLimitState,
  getRepos,
  getFollower,
  getUser,
  fetchRequestLimit,
} from "../app/rdx";

import mockUser from "../app/mockData/mockUser";
import mockFollower from "../app/mockData/mockFollowers";
import mockRepos from "../app/mockData/mockRepos";

const Dashboard = () => {
  const userInfo = useSelector(userState);
  const followers = useSelector(followerState);
  const repos = useSelector(repoState);
  const requestLimit = useSelector(requestLimitState);
  const dispatch = useDispatch();
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });
  const [request, setRequest] = useState(0)

  useEffect(() => {
    dispatch(getUser(mockUser));
    dispatch(getFollower(mockFollower));
    dispatch(getRepos(mockRepos));
    dispatch(fetchRequestLimit());
    if (requestLimit === 0) toggleError({show: true, msg: "Exceed hourly limit"})
  }, [requestLimit]);


  const toggleError = (show, msg) => {
    setError({show, msg})
  }


  return (
    <main>
      {/* <Navbar /> */}
      <Search />
      <Info repoInfo={userInfo} />
      <User followers={followers} userInfo={userInfo} />
      <Repos repos={repos} />
    </main>
  );
};

export default Dashboard;
