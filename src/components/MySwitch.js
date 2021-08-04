import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export default function SwitchLabels(props) {

  const handleChange = (event) => {
    props.onToggle();
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            checked={props.editMode}
            onChange={handleChange}
            name="editMode"
            color="primary"
          />
        }
        label="Edit mode"
      />
    </FormGroup>
  );
}
