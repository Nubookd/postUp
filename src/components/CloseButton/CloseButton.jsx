import React from "react";
import styles from "./CloseButton.module.scss";
import Button from "../Button/Button";
import CrossIcon from "../CrossIcon/CrossIcon";

export default function ({classes, onClick}) {
  return (
    <Button onClick={onClick} classes={classes}>
      <CrossIcon />
    </Button>
  );
}
