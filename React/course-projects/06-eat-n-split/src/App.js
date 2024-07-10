import { Button } from "./Button";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
      </div>
    </div>
  );
}

function FriendList() {
  const friends = initialFriends;
  return (
    <div>
      <ul>
        {friends.map((friend) => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </ul>
      <Button>Add Friend</Button>
    </div>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <DisplayBalansStatus friend={friend} />
      <Button>Select</Button>
    </li>
  );
}

function DisplayBalansStatus({ friend }) {
  if (friend.balance === 0) {
    return <p>{`You and ${friend.name} are even`}</p>;
  }
  if (friend.balance < 0) {
    return (
      <p className="red">{`You owe ${friend.name} ${Math.abs(
        friend.balance
      )}`}</p>
    );
  }
  if (friend.balance > 0) {
    return (
      <p className="green">{`${friend.name} owes you ${friend.balance}`}</p>
    );
  }
}
