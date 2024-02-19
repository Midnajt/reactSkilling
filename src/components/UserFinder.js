import { Fragment, Component } from "react";

import Users from "./Users";
import ErrorBoundary from "./ErrorBoundary.js";
import UsersContext from "../store/users-context.js";
import classes from "./UserFinder.module.css";

class UserFinder extends Component {
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    // Send http request...
    this.setState({ filteredUsers: this.context.users });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({ filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm)) });
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <ErrorBoundary>
          <div className={classes.finder}>
            <input type="search" onChange={this.searchChangeHandler.bind(this)} />
          </div>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

export default UserFinder;
