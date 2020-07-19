import React, {useEffect} from 'react';
import { Info, Navbar, Repos, Search, User } from '../components';
import loadingImage from '../images/preloader.gif';
import { useSelector, useDispatch } from 'react-redux';
import {userState, getUser} from "../app/rdx/userSlice"
import {followerState, getFollower} from "../app/rdx/followerSlice"
// import { GithubContext } from '../context/context';
import mockUser from "../app/mockData/mockUser"
import mockFollower from "../app/mockData/mockFollowers"

const Dashboard = () => {
  // const [followers, setFollowers] = useState(mockFollowers)
  // const [githubUser, setGithubUser] = useState(mockUser)
  // const [repos, setRepos] = useState(mockRepos)
  const userInfo = useSelector(userState);
  const followers = useSelector(followerState)
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getUser(mockUser))
    dispatch(getFollower(mockFollower))
  }, [])


  return (
    <main>
      {/* <Navbar /> */}
      {/* <Search /> */}
      <Info repoInfo={userInfo}/>
      <User followers={followers} userInfo={userInfo} />
      {/* <Repos /> */}
    </main>
  );
};

export default Dashboard;
