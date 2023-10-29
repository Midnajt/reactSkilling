import Card from "../Card/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  console.log(props.users);

  return (
    <Card classes={classes.usersList}>
      {props.users.map((user) => {
        return (
          <div key={user.userName}>
            {user.userName} (Age:{user.userAge})
          </div>
        );
      })}
    </Card>
  );
};

export default UsersList;
