import React from "react";
import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <div>
      <button
        className={classes.button}
        type={props.type || "button"}
        onclick={props.handelclick}
      >
        {props.children}
      </button>
    </div>
  );
};
export default Button;
