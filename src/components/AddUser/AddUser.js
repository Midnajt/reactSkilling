import { useState } from "react";

import Card from "../Card/Card.js";
import Button from "../Button/Button.js";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState(null);
  const [userAge, setUserAge] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();

    if (userName && userName.length > 5 && userAge) {
      props.onAddUser({ userName, userAge });
    } else {
      props.onCheckData();
    }
  };

  const changeAgeHandler = (e) => {
    setUserAge(e.target.value);
  };
  const changeNameHandler = (e) => {
    setUserName(e.target.value);
  };

  return (
    <Card>
      <form onSubmit={submitHandler} className={classes.form}>
        <label>Username</label>
        <input
          onChange={(e) => {
            changeNameHandler(e);
          }}
        ></input>
        <label>Age(Years)</label>
        <input
          type="number"
          onChange={(e) => {
            changeAgeHandler(e);
          }}
        ></input>
        <Button txt="ADD" />
      </form>
    </Card>
  );
};

export default AddUser;
