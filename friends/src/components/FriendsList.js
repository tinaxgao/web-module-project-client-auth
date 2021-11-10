import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then((resp) => {
        setFriends(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>Friends List</h2>
      {friends.map((friend) => (
        <div>
          <div>{friend.name}</div>
          <div>{friend.age}</div>
          <div>{friend.email}</div>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
