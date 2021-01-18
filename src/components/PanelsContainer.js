import React from "react";
import Panel from "./Panel.js";
import "./../styles/PanelsContainer.css";

export default class PanelsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePanel: null,
      completedPanels: [],
    };
  }

  getPercentComplete = () => {
    return Math.round(
      (this.state.completedPanels.length / this.props.panelsContent.length) *
        100
    );
  };

  onPanelClick = (panelId) => {
    this.setState({
      activePanel: this.state.activePanel === panelId ? null : panelId,
    });
  };

  onPanelComplete = (panelId) => {
    let newCompletedPanels = [...this.state.completedPanels]; // Don't mutate state directly
    if (newCompletedPanels.includes(panelId)) {
      let idxToRemove = newCompletedPanels.indexOf(panelId);
      newCompletedPanels.splice(idxToRemove, 1);
      this.setState({
        completedPanels: newCompletedPanels,
      });
    } else {
      newCompletedPanels.push(panelId);
      this.setState({
        completedPanels: newCompletedPanels,
      });
    }
  };

  render() {
    let panels = [];
    this.props.panelsContent.forEach((panelContent, index) => {
      let panelId = index + 1;
      panels.push(
        <Panel
          key={panelId}
          id={panelId}
          active={this.state.activePanel === panelId}
          onPanelClick={this.onPanelClick}
          onPanelComplete={this.onPanelComplete}
          panelContent={panelContent}
        ></Panel>
      );
    });
    let percentComplete = this.getPercentComplete();
    let className = "panel-container";
    let message = percentComplete === 100 ? ":)" : "Check the boxes to get started."
    return (
      <div className={className}>
        {message}
        <div className="panel-container-header">
          <div className="panel-container-header-left"><b>Topics</b></div>
          <div className="panel-container-header-right">Completion: {percentComplete}%</div>
        </div>
        {panels}
      </div>
    );
  }
}
