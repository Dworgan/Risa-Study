import { useState } from "react";
import { Button } from "./Button";
import { FriendList } from "./FriendList";

export const initialFriends = [
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
const defaulAvatarURL = "https://i.pravatar.cc/48";

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddfriend, setShowAddfriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddfriend((show) => !show);
  }
  function handleAddFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
    handleShowAddFriend();
  }

  function handleSelectedFriend(selectedFriend) {
    setSelectedFriend((cur) =>
      cur?.id === selectedFriend.id ? null : selectedFriend
    );
    setShowAddfriend(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          onFriends={friends}
          selectedFriend={selectedFriend}
          onFriendSelection={handleSelectedFriend}
        />
        {showAddfriend && <FormAddFriend onHandleAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {!showAddfriend ? "AddFriend" : "Close"}
        </Button>
      </div>
      {selectedFriend && (
        <div>
          <FormSplitBill selectedFriend={selectedFriend} />
        </div>
      )}
    </div>
  );
}

function FormAddFriend({ onHandleAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState(defaulAvatarURL);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    onHandleAddFriend(newFriend);
    console.log(newFriend);
    setName("");
    setImage(defaulAvatarURL);
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <DisplayInput
        label="🧑‍🤝‍👩 Friend's name"
        placeholder="Add new friend..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <DisplayInput
        label="🖼️ Image URL"
        placeholder="Friend's Image..."
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add friend</Button>
    </form>
  );
}

function FormSplitBill({ selectedFriend }) {
  const [bill, setBill] = useState("");
  const [expenses, SetExpenses] = useState("");
  const paidByFriend = bill ? bill - expenses : "";
  const [whoIspaying, setWhoIsPaying] = useState("user");

  function handleSetBill(iBill) {
    setBill(iBill);
  }
  function handleSetExpenses(iExpenses) {
    SetExpenses(iExpenses);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <DisplayInput
        label="💰 Bill value"
        placeholder="Set the bill"
        value={bill}
        onChange={(e) => handleSetBill(Number(e.target.value))}
      />
      <DisplayInput
        label="🕴️ Your expense"
        placeholder="What did you pay?"
        value={expenses}
        onChange={(e) =>
          handleSetExpenses(
            Number(e.target.value) > bill ? expenses : Number(e.target.value)
          )
        }
      />
      <DisplayInput
        label={`🧑‍🤝‍👩 ${selectedFriend.name}'s expense:`}
        placeholder=""
        value={paidByFriend}
        setDisabled={true}
      />
      <label>🤑 Who is paying the bill?</label>
      <select
        value={whoIspaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}

function DisplayInput({ label, placeholder, value, setDisabled, onChange }) {
  console.debug(setDisabled);
  return (
    <>
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        disabled={Boolean(setDisabled)}
        onChange={onChange}
      />
    </>
  );
}
