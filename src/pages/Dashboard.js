import React from "react";
import { Info, Navbar, Repos, Search, User } from "../components";
import { useSelector } from "react-redux";
import { userState } from "../app/rdx";

import Loader from "react-loader-spinner";

const Dashboard = () => {
  const { followers, loading, repos, user } = useSelector(userState);
  const userInfo = useSelector(userState);

  if (loading) {
    return (
      <main>
        <Navbar />
        <Search />
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
      <Search />
      {(followers.length && repos.length) < 1 && (!userInfo.error) ? (
        <h3>{`Search to see user info...`}</h3>
      ) : (
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
