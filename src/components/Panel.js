import React from "react";
import "./../styles/Panel.css";
import Checkbox from "./Checkbox";

export default class Panel extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick = (e) => {
    this.props.onPanelClick(this.props.panelId);
  };

  onCheckboxChange = (e) => {
    this.props.onPanelComplete(this.props.panelId);
    this.setState({});
  };

  render() {
    let panelContent = this.props.panelContent;

    let className = "panel";
    if (this.props.panelId == this.props.activePanel) {
      className += " panel-active";
    }

    return (
      <div onClick={this.onClick} className={className}>
        <h3>{panelContent.panelTitle}</h3>
        <p>{panelContent.panelBody}</p>
        <Checkbox
          onCheckboxChange={this.onCheckboxChange}
          checkboxId={this.props.panelId}
          key={this.props.panelId}
        />
      </div>
    );
  }
}
