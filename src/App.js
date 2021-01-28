import React from "react";
import "./App.css";
import PanelsContainer from "./components/PanelsContainer.js";
import MyFab from "./components/MyFab.js";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      accordions: {
        1: {
          summary: "First panel",
          details: "Hello there",
          complete: false,
          active: false,
        },
        2: {
          summary: "Second panel",
          details: "Another happy landing",
          complete: false,
          active: false,
        },
        3: {
          summary: "Third panel",
          details: "The negotiations were short",
          complete: false,
          active: false,
        },
      },
    };
  }

  onCreateNewEmptyPanel = () => {
    let nextId = Math.max(...Object.keys(this.state.accordions)) + 1
    this.setState({
      accordions: {
        ...this.state.accordions,
          [nextId]: {
          summary: "Lorem ipsum",
          details: "Lorem ipsum",
          complete: false,
          active: false,
        },
      },
    });
  };

  onPanelComplete = (accordionId) => {
    let newAccordions = { ...this.state.accordions };
    newAccordions[accordionId]["complete"] = !newAccordions[accordionId][
      "complete"
    ];
    this.setState({
      accordions: newAccordions,
    });
  };

  onPanelDelete = (accordionId) => {
    let newAccordions = { ...this.state.accordions };
    delete newAccordions[accordionId];
    this.setState({
      accordions: newAccordions,
    });
  };

  onPanelSelect = (accordionId) => {
    let newAccordions = { ...this.state.accordions };
    newAccordions[accordionId]["active"] = !newAccordions[accordionId]["active"];
    this.setState({ accordions: newAccordions });
  };

  render() {
    return (
      <div className="App">
        <PanelsContainer
          onCreateNewEmptyPanel={this.onCreateNewEmptyPanel}
          onAccordionDelete={this.onPanelDelete}
          onAccordionComplete={this.onPanelComplete}
          onAccordionSelect={this.onPanelSelect}
          accordions={this.state.accordions}
        ></PanelsContainer>
        <MyFab></MyFab>
      </div>
    );
  }
}
