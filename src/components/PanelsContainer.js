import React from "react";
import MyAccordion from "./MyAccordion.js";
import "./../styles/PanelsContainer.css";

export default class PanelsContainer extends React.Component {
  getDisplayPercent = () => {
    let percentComplete = this.getPercentComplete();
    return isNaN(percentComplete) ? "" : percentComplete;
  };

  // returns NaN or a number 0 - 100
  getPercentComplete = () => {
    return Math.round(
      (Object.values(this.props.accordions).filter((x) => x.complete).length /
        Object.keys(this.props.accordions).length) *
        100
    );
  };

  onPanelSelect = (panelId) => {
    this.props.onAccordionSelect(panelId);
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
    let accordions = [];
    for (const [key, value] of Object.entries(this.props.accordions)) {
      accordions.push(
        <MyAccordion
          id={key}
          key={key}
          summary={value.summary}
          details={value.details}
          onAccordionSelect={this.onPanelSelect}
          onAccordionComplete={this.props.onAccordionComplete}
          onAccordionDelete={this.props.onAccordionDelete}
        ></MyAccordion>
      );
    }

    let className = "panel-container";
    return (
      <div className={className}>
        {/*<div onClick={this.props.onCreateNewEmptyPanel}>Click me to create a new empty panel</div>*/}
        {this.getMessage()}
        <div className="panel-container-header">
          <div className="panel-container-header-left">
            <b>Topics</b>
          </div>
          <div className="panel-container-header-right">
            Completion: {this.getDisplayPercent()}%
          </div>
        </div>
        {accordions}
      </div>
    );
  }
}
