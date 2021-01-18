import React from "react";
import Panel from "./Panel.js";
import "./../styles/PanelsContainer.css";

export default class PanelsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePanel: null,
    };
  }

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
    this.setState({
      activePanel: this.state.activePanel === panelId ? null : panelId,
    });
  };

  onPanelComplete = (panelId) => {
    this.props.onPanelComplete(panelId);
  };

  getMessage = () => {
    let percentComplete = this.getPercentComplete();
    return percentComplete === 100
      ? ":)"
      : isNaN(percentComplete)
      ? "Oops, all out of boxes! Add some boxes or refresh the page to start again"
      : "Check the boxes to get started.";
  };

  render() {
    let panels = [];

    for (const [key, value] of Object.entries(this.props.panelsContent)) {
      panels.push(
        <Panel
          key={key}
          id={key}
          active={this.state.activePanel === key}
          onPanelSelect={this.onPanelSelect}
          onPanelComplete={this.onPanelComplete}
          onPanelDelete={this.props.onPanelDelete}
          panelContent={value}
        ></Panel>
      );
    }

    let className = "panel-container";
    let percentCompletea = this.getPercentComplete();
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
