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
          summary: "Groceries",
          details: "Buy beef, eggs, and cheese",
          complete: false,
          active: false,
        },
        2: {
          summary: "Haircut",
          details: "Low fade with disconnected fringe",
          complete: false,
          active: false,
        },
        3: {
          summary: "Work on side project",
          details: "Complete the AWS React App tutorial",
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
