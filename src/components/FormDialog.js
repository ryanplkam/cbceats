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
    this.fieldErrors = {
      summary: "Summary cannot be blank",
      details: "Details cannot be blank",
    };
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
    let errors = this.validateFields();
    if (Object.values(errors).some((error) => error !== "")) {
      this.setState({ ...this.state, errors: errors });
      return;
    }
    this.props.onCreateAccordion({
      summary: this.state.summary,
      details: this.state.details,
    });
    this.setState(this.defaultState);
  };

  validateFields = () => {
    let errors = {};
    for (let [field, fieldErrorText] of Object.entries(this.fieldErrors)) {
      errors[field] = this.state[field] ? "" : fieldErrorText;
    }
    return errors;
  };

  validateField = (field, fieldErrorMessage) => {
    let fieldError = this.state[field] ? "" : fieldErrorMessage;
    this.setState({
      ...this.state,
      errors: {
        ...this.state.errors,
        [field]: fieldError,
      },
    });
  };

  handleSummaryChange = (e) => {
    let newState = {
      ...this.state,
      summary: e.target.value,
    };
    this.setState(newState, function () {
      this.validateField("summary", "Summary cannot be blank");
    });
  };

  handleDetailsChange = (e) => {
    let newState = { ...this.state, details: e.target.value };
    this.setState(newState, function () {
      this.validateField("details", "Details cannot be blank");
    });
  };

  handleClickOpen = () => {
    let newState = { ...this.state, open: true };
    this.setState(newState);
  };

  handleClose = () => {
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
          aria-labelledby=""
          disableScrollLock={true}
        >
          <DialogTitle id="">Add a task</DialogTitle>
          <form onSubmit={this.handleSubmit}>
            <DialogContent>
              <DialogContentText>
                To add a new task, enter the task title and details here.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id=""
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
                id=""
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
