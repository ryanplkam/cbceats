import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fab, useMediaQuery } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import "./../styles/MyFab.css";

export default function MyFab(props) {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const useStyles = makeStyles({
    fabBase: {
      position: "absolute",
      bottom: isMobile ? "20px" : "40px",
    },
    fabLeft: {
      left: isMobile ? "16px" : "10%",
    },
    fabRight: {
      right: isMobile ? "16px" : "10%",
    },
  });
  const classes = useStyles();

  let alignmentClass;
  switch (props.alignment) {
    case "right":
      alignmentClass = classes.fabRight;
      break;
    case "left":
      alignmentClass = classes.fabRight;
      break;
  }

  return (
    <Fab
      onClick={props.onClick}
      className={`${classes.fabBase} ${alignmentClass}`}
    >
      <AddIcon></AddIcon>
    </Fab>
  );
}
