import React, { useState } from "react";

import classes from "./UserInput.module.css";

const INITIAL_USER_INPUT = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  "duration-time": 10,
};

const UserInput = (props) => {
  const [userInput, setUserInput] = useState(INITIAL_USER_INPUT);

  const submitHandler = (e) => {
    e.preventDefault();

    props.onCalculate(userInput);
  };

  const resetHandler = () => {
    setUserInput(INITIAL_USER_INPUT);
  };

  const changeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(e) => {
              changeHandler("current-savings", e.target.value);
            }}
            value={userInput["current-savings"]}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(e) => {
              changeHandler("yearly-contribution", e.target.value);
            }}
            value={userInput["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(e) => {
              changeHandler("expected-return", e.target.value);
            }}
            value={userInput["expected-return"]}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(e) => {
              changeHandler("duration-time", e.target.value);
            }}
            value={userInput["duration-time"]}
            type="number"
            id="duration-time"
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          onClick={resetHandler}
          type="reset"
          className={classes.buttonAlt}
        >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
