import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MyFab from "./MyFab.js";

export default class FormDialog extends React.Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      open: false,
      summary: "",
      details: "",
      errors: {
        summary: "",
        details: "",
      },
    };
    this.state = this.defaultState;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(this.state.errors).some((error) => error !== "")) return;
    this.props.onCreateAccordion({
      summary: this.state.summary,
      details: this.state.details,
    });
    this.setState(this.defaultState);
  };

  validateField = (field, fieldError) => {
    this.setState({
      ...this.state,
      errors: {
        ...this.state.errors,
        [field]: fieldError,
      },
    });
  };

  handleSummaryChange = (e) => {
    let summaryValue = e.target.value;
    let summaryError = summaryValue ? "" : "Summary cannot be blank";
    let newState = {
      ...this.state,
      summary: summaryValue,
    };
    this.setState(newState, function () {
      this.validateField("summary", summaryError);
    });
  };

  handleDetailsChange = (e) => {
    let detailsValue = e.target.value;
    let detailsError = detailsValue ? "" : "Details cannot be blank";
    let newState = { ...this.state, details: detailsValue };
    this.setState(newState, function () {
      this.validateField("details", detailsError);
    });
  };

  handleClickOpen = (e) => {
    let newState = { ...this.state, open: true };
    this.setState(newState);
  };

  handleClose = (e) => {
    let newState = { ...this.state, open: false };
    this.setState(newState);
  };

  render() {
    let { errors, open, summary, details } = this.state;
    return (
      <div>
        <MyFab alignment="right" onClick={this.handleClickOpen}></MyFab>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add a topic</DialogTitle>
          <form onSubmit={this.handleSubmit}>
            <DialogContent>
              <DialogContentText>
                To add a new topic, please enter the topic summary and details
                here.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="summary"
                label="Summary"
                type="text"
                fullWidth
                value={summary}
                onChange={this.handleSummaryChange}
                error={Boolean(errors.summary)}
                helperText={errors.summary}
              />
              <TextField
                margin="dense"
                id="details"
                label="Details"
                type="text"
                fullWidth
                value={details}
                onChange={this.handleDetailsChange}
                error={Boolean(errors.details)}
                helperText={errors.details}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button color="primary" type="submit">
                Add
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}
