import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import ErrorModal from "./components/ErrorModal/ErrorModal";
import UsersList from "./components/UsersList/UsersList";
import "./index.css";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [users, setUsers] = useState([]);
  console.log({ users });
  const confirmError = () => {
    setShowPopup(false);
  };

  const checkData = () => {
    setShowPopup(true);
  };

  const addUser = (userData) => {
    console.log(userData);
    console.log(userData.userName);
    console.log(userData.userAge);

    setUsers(users.push(userData));
  };
  return (
    <div>
      <AddUser onCheckData={checkData} onAddUser={addUser} />
      {showPopup && <ErrorModal onConfirmError={confirmError} />}
      {users.length > 0 && <UsersList />}
    </div>
  );
}

export default App;
