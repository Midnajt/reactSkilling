import Card from "../Card/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  console.log(props);

  return (
    <Card classes={classes.usersList}>
      <div>
        {props.name} (Age:{props.age})
      </div>
    </Card>
  );
};

export default UsersList;
