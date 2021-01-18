import React from "react";
import Panel from "./Panel.js";
import "./../styles/PanelsContainer.css";

export default class PanelsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePanel: null
    };
  }

  getPercentComplete = () => {
      console.log('here')
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
    this.props.onPanelComplete(panelId)
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

    let percentComplete = this.getPercentComplete();
    let className = "panel-container";
    let message =
      percentComplete === 100 ? ":)" : "Check the boxes to get started.";
    return (
      <div className={className}>
        {message}
        <div className="panel-container-header">
          <div className="panel-container-header-left">
            <b>Topics</b>
          </div>
          <div className="panel-container-header-right">
            Completion: {isNaN(percentComplete) ? "" : percentComplete}%
          </div>
        </div>
        {panels}
      </div>
    );
  }
}
