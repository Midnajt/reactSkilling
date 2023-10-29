import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import ErrorModal from "./components/ErrorModal/ErrorModal";
import UsersList from "./components/UsersList/UsersList";
import "./index.css";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [users, setUsers] = useState([]);

  const confirmError = () => {
    setShowPopup(false);
  };

  const checkData = () => {
    setShowPopup(true);
  };

  const addUser = (userData) => {
    setUsers((prevUsers) => [...prevUsers, userData]);
  };
  return (
    <div>
      <AddUser onCheckData={checkData} onAddUser={addUser} />
      {showPopup && <ErrorModal onConfirmError={confirmError} />}
      {users.length > 0 && <UsersList users={users} />}
    </div>
  );
}

export default App;
