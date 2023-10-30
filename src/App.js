import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
// import ErrorModal from "./components/ErrorModal/ErrorModal";
// import UsersList from "./components/UsersList/UsersList";
import "./index.css";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUser = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUser} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
