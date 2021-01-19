import React from "react";
import "./App.css";
import PanelsContainer from "./components/PanelsContainer.js";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      panelsContent: {
        1: {
          panelTitle: "First panel",
          panelBody: "Hello there",
          complete: false,
          active: false,
        },
        2: {
          panelTitle: "Second panel",
          panelBody: "Another happy landing",
          complete: false,
          active: false,
        },
        3: {
          panelTitle: "Third panel",
          panelBody: "The negotiations were short",
          complete: false,
          active: false,
        },
      },
    };
  }

  onPanelComplete = (panelId) => {
    let newPanelsContent = { ...this.state.panelsContent };
    newPanelsContent[panelId]["complete"] = !newPanelsContent[panelId][
      "complete"
    ];
    this.setState({
      panelsContent: newPanelsContent,
    });
  };

  onPanelDelete = (panelId) => {
    let newPanelsContent = { ...this.state.panelsContent };
    delete newPanelsContent[panelId];
    this.setState({
      panelsContent: newPanelsContent,
    });
  };

  onPanelSelect = (panelId) => {
    let newPanelsContent = { ...this.state.panelsContent };
    newPanelsContent[panelId]["active"] = !newPanelsContent[panelId]["active"];
    Object.entries(newPanelsContent)
      .filter((entry) => entry[0] !== panelId)
      .forEach((panel) => (panel[1]["active"] = false));
    this.setState({ panelsContent: newPanelsContent });
  };

  render() {
    return (
      <div className="App">
        <PanelsContainer
          onPanelDelete={this.onPanelDelete}
          onPanelComplete={this.onPanelComplete}
          onPanelSelect={this.onPanelSelect}
          panelsContent={this.state.panelsContent}
        ></PanelsContainer>
      </div>
    );
  }
}
