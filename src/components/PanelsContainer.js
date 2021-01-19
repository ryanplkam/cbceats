import React from "react";
import Panel from "./Panel.js";
import "./../styles/PanelsContainer.css";

export default class PanelsContainer extends React.Component {
  getDisplayPercent = () => {
    let percentComplete = this.getPercentComplete();
    return isNaN(percentComplete) ? "" : percentComplete;
  };

  // returns NaN or a number 0 - 100
  getPercentComplete = () => {
    return Math.round(
      (Object.values(this.props.panelsContent).filter((x) => x.complete)
        .length /
        Object.keys(this.props.panelsContent).length) *
        100
    );
  };

  onPanelSelect = (panelId) => {
    this.props.onPanelSelect(panelId);
  };

  onPanelComplete = (panelId) => {
    this.props.onPanelComplete(panelId);
  };

  getMessage = () => {
    let percentComplete = this.getPercentComplete();
    if (isNaN(percentComplete))
      return "Oops, all out of boxes! Add some boxes or refresh the page to start again";
    switch (percentComplete) {
      case 100:
        return ":)";
      default:
        return "Check the boxes to get started.";
    }
  };

  render() {
    let panels = [];

    for (const [key, value] of Object.entries(this.props.panelsContent)) {
      panels.push(
        <Panel
          key={key}
          id={key}
          active={value["active"]}
          onPanelSelect={this.onPanelSelect}
          onPanelComplete={this.onPanelComplete}
          onPanelDelete={this.props.onPanelDelete}
          panelContent={value}
        ></Panel>
      );
    }

    let className = "panel-container";
    return (
      <div className={className}>
        {this.getMessage()}
        <div className="panel-container-header">
          <div className="panel-container-header-left">
            <b>Topics</b>
          </div>
          <div className="panel-container-header-right">
            Completion: {this.getDisplayPercent()}%
          </div>
        </div>
        {panels}
      </div>
    );
  }
}
