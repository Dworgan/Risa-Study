import { Button } from "./Button";

export function FriendList({ onFriends, selectedFriend, onFriendSelection }) {
  return (
    <div>
      <ul>
        {onFriends.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            selectedFriend={selectedFriend}
            onFriendSelection={onFriendSelection}
          />
        ))}
      </ul>
    </div>
  );
}
function Friend({ friend, selectedFriend, onFriendSelection }) {
  let isSelectedFriend = selectedFriend?.id === friend.id;

  return (
    <li className={isSelectedFriend ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <DisplayBalansStatus friend={friend} />
      <Button onClick={() => onFriendSelection(friend)}>
        {isSelectedFriend ? "hide" : "Select"}
      </Button>
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
