import React, {useEffect} from 'react';
import { Info, Navbar, Repos, Search, User } from '../components';
import loadingImage from '../images/preloader.gif';
import { useSelector, useDispatch } from 'react-redux';
import {userState, getUser} from "../app/rdx/userSlice"
// import { GithubContext } from '../context/context';
import mockUser from "../app/mockData/mockUser"

const Dashboard = () => {
  // const [followers, setFollowers] = useState(mockFollowers)
  // const [githubUser, setGithubUser] = useState(mockUser)
  // const [repos, setRepos] = useState(mockRepos)
  const userInfo = useSelector(userState);
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getUser(mockUser))
  }, [])


  return (
    <main>
      {/* <Navbar /> */}
      {/* <Search /> */}
      <Info repoInfo={userInfo}/>
      <User userInfo={userInfo}/>
      {/* <Repos /> */}
    </main>
  );
};

export default Dashboard;
