import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./Errormodul.module.css";

const Errormodulr = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onconfirm}>
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.actions}>
            <Button>{props.onconfirm} Okay</Button>
          </footer>
        </Card>
      </div>
    </div>
  );
};
export default Errormodulr;
