import React from "react";
import "./App.css";
import PanelsContainer from "./components/PanelsContainer.js";

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    const panelsContent = [
      { panelTitle: "First panel", panelBody: "Hello there" },
      { panelTitle: "Second panel", panelBody: "Another happy landing" },
      { panelTitle: "Third panel", panelBody: "The negotiations were short" },
    ];

    return (
      <div className="App">
        <PanelsContainer panelsContent={panelsContent}></PanelsContainer>
      </div>
    );
  }
}
