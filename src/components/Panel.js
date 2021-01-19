import React from "react";
import "./../styles/Panel.css";
import "./../styles/Common.css";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";

export default class Panel extends React.Component {
  onClick = (e) => {
    this.props.onPanelSelect(this.props.id);
  };

  onDelete = (e) => {
    e.stopPropagation();
    this.props.onPanelDelete(this.props.id);
  };

  onComplete = (e) => {
      this.props.onPanelComplete(this.props.id)
  }

  onCheckboxClick = (e) => {
    e.stopPropagation();
  }

  render() {
    let panelContent = this.props.panelContent;

    let className = "panel";
    let panelArrow;
    if (this.props.active) {
      className += " panel-active";
      panelArrow = <KeyboardArrowUpIcon />;
    } else {
      panelArrow = <KeyboardArrowDownIcon />;
    }

    return (
      <div onClick={this.onClick} className={className}>
        <div className="panel-header">
          <div className="panel-header-left">
            <Checkbox
              onClick={this.onCheckboxClick}
              onChange={this.onComplete}
              id={this.props.id}
              key={this.props.id}
            />
          </div>
          <div className="panel-header-title">
            <p>{panelContent.panelTitle}</p>
          </div>
          <div className={"panel-header-right"}>
            <DeleteIcon onClick={this.onDelete}></DeleteIcon>
          </div>
          <div className={"panel-header-right"}>{panelArrow}</div>
        </div>

        <div className="panel-body">
          <p>{panelContent.panelBody}</p>
        </div>
      </div>
    );
  }
}
