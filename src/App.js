import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import ErrorModal from "./components/ErrorModal/ErrorModal";
import css from "./index.css";

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const confirmError = () => {
    setShowPopup(false);
  };

  const addUser = () => {
    setShowPopup(true);
  };
  return (
    <div>
      <AddUser onAddUser={addUser} />
      {showPopup && <ErrorModal onConfirmError={confirmError} />}
    </div>
  );
}

export default App;
