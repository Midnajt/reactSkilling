import { useState } from "react";

import Card from "../Card/Card.js";
import Button from "../Button/Button.js";
import ErrorModal from "../ErrorModal/ErrorModal.js";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!name && !age) {
      props.onAddUser();
    }
  };

  return (
    <Card>
      <form onSubmit={submitHandler} className={classes.form}>
        <label>Username</label>
        <input></input>
        <label>Age(Years)</label>
        <input type="number"></input>
        <Button txt="ADD" />
      </form>
    </Card>
  );
};

export default AddUser;
