import React from "react";
import "./App.css";
import AccordionContainer from "./components/AccordionContainer.js";
import FormDialog from "./components/FormDialog.js";
import Footer from "./components/Footer.js";

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

  nextAccordionId = () => {
    return Math.max(...Object.keys(this.state.accordions)) + 1;
  };

  onCreateAccordion = (accordion) => {
    this.setState({
      accordions: {
        ...this.state.accordions,
        [this.nextAccordionId()]: {
          summary: accordion.summary,
          details: accordion.details,
          complete: false,
          active: false,
        },
      },
    });
  };

  onCreateNewEmptyPanel = () => {
    this.setState({
      accordions: {
        ...this.state.accordions,
        [this.nextAccordionId()]: {
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
    newAccordions[accordionId]["active"] = !newAccordions[accordionId][
      "active"
    ];
    this.setState({ accordions: newAccordions });
  };

  render() {
    return (
      <div className="App">
        <AccordionContainer
          onCreateNewEmptyPanel={this.onCreateNewEmptyPanel}
          onAccordionDelete={this.onPanelDelete}
          onAccordionComplete={this.onPanelComplete}
          onAccordionSelect={this.onPanelSelect}
          accordions={this.state.accordions}
        ></AccordionContainer>
        <FormDialog onCreateAccordion={this.onCreateAccordion}></FormDialog>
        <Footer></Footer>
      </div>
    );
  }
}
