import "./App.css";
import { Heading } from "./components/Heading/Heading";
import Profile from "./components/Profile/Profile";
import friends from "./data/friends.json";
import userData from "./data/userData.json";
import transactions from "./data/transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import FriendList from "./components/FriendList/FriendList";

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
      <FriendList friends={friends} />
      <Heading title="Task 3 Transaction history" bottom />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
