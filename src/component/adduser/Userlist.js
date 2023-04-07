import React from "react";
import Card from "../ui/Card";
import classes from "./Userlist.module.css";

const Userlist = (props) => {
  return (
    <Card className={classes.user}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old) {user.collegename}
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default Userlist;
