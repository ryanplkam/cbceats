import React from 'react';
import logo from './logo.svg';
import './App.css';
import PanelsContainer from './components/PanelsContainer.js';

export default class App extends React.Component {
  constructor()  {
    super()
  }

  render() {

    const panelsContent = [
      {panelTitle:'First panel', panelBody: 'Hello there'},
      {panelTitle:'Second panel', panelBody: 'Another happy landing'},
      {panelTitle:'Third panel', panelBody: 'The negotiations were short'},
    ]

    return (
      <div className="App">
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          
    </header>*/}
        <PanelsContainer panelsContent={panelsContent}></PanelsContainer>
        <PanelsContainer panelsContent={panelsContent}></PanelsContainer>
      </div>
    );
  }
  
}