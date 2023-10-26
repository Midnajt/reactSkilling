import Card from "../Card/Card";
import Button from "../Button/Button";

import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  const submtiHandler = (e) => {
    e.preventDefault();

    props.onConfirmError();
  };
  return (
    <form onSubmit={submtiHandler} className={classes.errorModal}>
      <Card classes={classes.modal}>
        <p>Invalid input</p>
        <p>Please enter a valid name and age (non-empty values).</p>
        <Button txt="OK"></Button>
      </Card>
    </form>
  );
};

export default ErrorModal;
