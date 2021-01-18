import React from "react";

export default class Checkbox extends React.Component {
  onChange = (e) => {
    this.props.onCheckboxChange(this.props.checkboxId);
  };

  onClick = (e) => {
    e.stopPropagation();
  };

  render() {
    return (
      <>
        <input
          onClick={this.onClick}
          onChange={this.onChange}
          className={this.props.checkboxClassName}
          type="checkbox"
          id=""
          name=""
          value=""
        ></input>
      </>
    );
  }
}
