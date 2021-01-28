import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fab, useMediaQuery } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import "./../styles/MyFab.css";

export default function MyFab(props) {
  // returns a function
  const useStyles = makeStyles({
    fabDesktop: {
      position: "absolute",
      bottom: "40px",
      right: "10%",
    },
    fabMobile: {
      position: "absolute",
      bottom: "20px",
      right: "16px",
    },
  });
  const classes = useStyles();

  const isMobile = useMediaQuery("(max-width: 600px)");

  let className = isMobile ? classes.fabMobile : classes.fabDesktop;

  return (
    <Fab className={className}>
      <AddIcon></AddIcon>
    </Fab>
  );
}
