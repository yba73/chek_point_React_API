import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const UserList = () => {
  const [listOfUSer, setListOfUSer] = useState([
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
    },
  ]);
  useEffect(() => {
    const Data = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          console.log(res);
          console.log(res.data);
          setListOfUSer(res.data);
        })

        .catch((error) => console.log(error));
    };

    return () => {
      Data();
    };
  }, []);

  return (
    <div>
      {listOfUSer.map((el) => (
        <div key={el.id}>
          <h2>Name : {el.name}</h2>
          <h2>Username : {el.username}</h2>
          <h2>Email : {el.email}</h2>
          <h2>Phone : {el.phone}</h2>
          <h2>website : {el.website}</h2>
          <br />
        </div>
      ))}
    </div>
  );
};

export default UserList;
