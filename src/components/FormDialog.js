import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MyFab from "./MyFab.js";

export default function FormDialog() {
  // useState returns the current state and the function that updates it
  // similar to this.state.count and this.setState
  const [formState, setState] = React.useState({
    open: false,
    summary: "",
    details: "",
  });

  const handleSummaryChange = (e) => {
    let newState = { ...formState, summary: e.target.value };
    setState(newState);
  };

  const handleDetailsChange = (e) => {
    let newState = { ...formState, details: e.target.value };
    setState(newState);
  };

  const handleClickOpen = () => {
    let newState = { ...formState, open: true };
    setState(newState);
  };

  const handleClose = () => {
    let newState = { ...formState, open: false };
    setState(newState);
  };

  const { open, summary, details } = formState;

  return (
    <div>
      <MyFab alignment="right" onFabClick={handleClickOpen}></MyFab>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add a topic</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new topic, please enter the topic summary and details here.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Summary"
            type="text"
            fullWidth
            value={summary}
            onChange={handleSummaryChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Details"
            type="text"
            fullWidth
            value={details}
            onChange={handleDetailsChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
