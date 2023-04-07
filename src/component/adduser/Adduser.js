import React, { useRef, useState } from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Errormodulr from "../ui/Errormodulr";
import classes from "./Adduser.module.css";

const Adduser = (props) => {
  const nameinputref = useRef();
  const ageinputref = useRef();
  const colnameinputref = useRef();

  const [error, seterror] = useState();

  const handlesubmit = (event) => {
    const nameinput = nameinputref.current.value;
    const ageinput = ageinputref.current.value;
    const colinput = colnameinputref.current.value;
    event.preventDefault();
    if (
      nameinput.trim().length === 0 ||
      ageinput.trim().length === 0 ||
      colinput.trim().length === 0
    ) {
      seterror({
        title: "invalid input",
        message: "please enter the valid name and age"
      });
      return;
    }
    if (+ageinput < 1) {
      seterror({
        title: "invalid age",
        message: "please enter the valid  age(>0)"
      });
      return;
    }

    props.handlesubnmit(nameinput, ageinput, colinput);
    nameinputref.current.value = "";
    ageinputref.current.value = "";
    colnameinputref.current.value = "";
  };

  const errorhandler = () => {
    seterror(null);
  };

  return (
    <div>
      {error && (
        <Errormodulr
          title={error.title}
          message={error.message}
          onconfirm={errorhandler}
        />
      )}
      <Card cssclasses={classes.input}>
        <form onSubmit={handlesubmit} action="">
          <label htmlFor="">username</label>
          <input type="text" name="username" ref={nameinputref} />

          <label htmlFor="">Age</label>
          <input type="number" name="age" ref={ageinputref} />

          <label htmlFor="">collegename</label>
          <input type="text" name="collegename" ref={colnameinputref} />

          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};
export default Adduser;
