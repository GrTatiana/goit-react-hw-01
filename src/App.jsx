// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { Heading } from "./components/Heading/Heading";
import Profile from "./components/Profile/Profile";
import userData from "./data/userData.json";
import "./data/friendData.json";
import FriendList from "./components/Friendlist/Friendlist";
const App = () => {
  return (
    <>
     <Heading title="Task 1 Profile Card" bottom />
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
       <Heading title="Task 2 FriendList " bottom />
     <FriendList friendData={friendData}/>
    </>
  );
};

export default App;
