import React, {useEffect} from 'react';
import { Info, Navbar, Repos, Search, User } from '../components';
import loadingImage from '../images/preloader.gif';
import { useSelector, useDispatch } from 'react-redux';
import {userState, getUser} from "../app/rdx/userSlice"
import {followerState, getFollower} from "../app/rdx/followerSlice"
import {repoState, getRepos} from "../app/rdx/repoSlice.js"


import mockUser from "../app/mockData/mockUser"
import mockFollower from "../app/mockData/mockFollowers"
import mockRepos from "../app/mockData/mockRepos"

const Dashboard = () => {
  const userInfo = useSelector(userState);
  const followers = useSelector(followerState)
  const repos = useSelector(repoState)
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getUser(mockUser))
    dispatch(getFollower(mockFollower))
    dispatch(getRepos(mockRepos))
  }, [])


  return (
    <main>
      {/* <Navbar /> */}
      {/* <Search /> */}
      <Info repoInfo={userInfo}/>
      <User followers={followers} userInfo={userInfo} />
      <Repos />
    </main>
  );
};

export default Dashboard;
