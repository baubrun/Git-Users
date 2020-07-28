import React, { useEffect, useState } from "react";
import { Info, Navbar, Repos, Search, User } from "../components";
import loadingImage from "../images/preloader.gif";
import { useSelector, useDispatch } from "react-redux";
import {
  // state
  // followerState,
  // repoState,
  requestLimitState,
  userState,
  // mockUserState,

  // actions
  // getFollower,
  // getRepos,
  fetchRequestLimit,
  // getMockUser,
} from "../app/rdx";

// import mockUser from "../app/mockData/mockUser";
// import mockFollower from "../app/mockData/mockFollowers";
// import mockRepos from "../app/mockData/mockRepos";

import Loader from "react-loader-spinner";

const Dashboard = () => {
  const { followers, loading, repos, user } = useSelector(userState);
  const requestLimit = useSelector(requestLimitState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRequestLimit());
    // dispatch(getMockUser(mockUser));
    // dispatch(getFollower(mockFollower));
    // dispatch(getRepos(mockRepos));
    // if (requestLimit <= 0)
    //   toggleError(true, "Exceeded hourly limit" );
  }, [requestLimit]);

  if (loading) {
    return (
      <main>
        <Navbar />
        <Search requestLimit={requestLimit} />
        <Loader
          className="loading-img"
          type="Grid"
          color="#00BFFF"
          height={250}
          width={250}
        />
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <Search requestLimit={requestLimit} />
      {(followers.length || repos.length) > 0 && (
        <>
          <Info repoInfo={user} />
          <User followers={followers} userInfo={user} />
          <Repos repos={repos} />
        </>
      )}
    </main>
  );
};

export default Dashboard;
