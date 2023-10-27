import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import ErrorModal from "./components/ErrorModal/ErrorModal";
import UsersList from "./components/UsersList/UsersList";
import "./index.css";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [users, setUsers] = useState(null);
  const confirmError = () => {
    setShowPopup(false);
  };

  const checkData = () => {
    setShowPopup(true);
  };

  const addUser = (userData) => {
    setUsers(userData);
  };
  console.log(users);
  return (
    <div>
      <AddUser onCheckData={checkData} onAddUser={addUser} />
      {showPopup && <ErrorModal onConfirmError={confirmError} />}
      {users && <UsersList />}
    </div>
  );
}

export default App;
