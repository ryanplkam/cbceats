import React, { Component } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default class MyAccordion extends Component {
  onClick = (e) => {
    this.props.onAccordionSelect(this.props.id);
  };

  onComplete = (e) => {
    this.props.onAccordionComplete(this.props.id);
  };

  render() {
    return (
      <Accordion onClick={this.onClick}>
        <AccordionSummary
          aria-label="Select"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id=""
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox onChange={this.onComplete} />}
            label={this.props.summary}
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{this.props.details}</Typography>
        </AccordionDetails>
      </Accordion>
    );
  }
}
