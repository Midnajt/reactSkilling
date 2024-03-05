import { useState } from "react";
import Input from "./Input";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");
  const passwordIsInvalid = didEdit.password && !enteredValues.password.trim().length < 6;

  function handleSubmit(event) {
    event.preventDefault();

    console.log(enteredValues);
    // reset
    setEnteredValues({
      email: "",
      password: "",
    });
  }

  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));

    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="control-row">
        <Input
          label="email"
          id="email"
          type="email"
          name="email"
          onBlur={() => {
            handleInputBlur("email");
          }}
          onChange={(event) => {
            handleInputChange("email", event.target.value);
          }}
          value={enteredValues["email"]}
          error={emailIsInvalid && "Please enter a valid email!"}
        ></Input>
        <Input
          id="password"
          label="password"
          name="password"
          onBlur={() => {
            handleInputBlur("password");
          }}
          onChange={(event) => {
            handleInputChange("password", event.target.value);
          }}
          value={enteredValues["password"]}
          error={passwordIsInvalid && "Please enter a valid password!"}
        ></Input>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
