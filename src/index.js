import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

var Parse = require('parse/node');

Parse.initialize("agCUoLxhUhN1Y6uBulpfGI67xPRDRmWuVrjAifEe","F1mv0lEJd8U7f8K4qipddcEkG4AV2OyzMNc1IejW"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = 'https://parseapi.back4app.com/'

async function saveNewPerson() {
  const Person = Parse.Object.extend("Person");
  const person = new Person();

  person.set("name", "John Snow");
  person.set("age", 27);
  try {
    let result = await person.save()
    alert('New object created with objectId: ' + result.id);
    } catch(error) {
        alert('Failed to create new object, with error code: ' + error.message);
    }
  } 

//Reading your First Data Object from Back4App
async function retrievePerson() {
  const Person = Parse.Object.extend("Person");
  const query = new Parse.Query(Person);
  try {
    const person = await query.get("mhPFDlCahj");
    const name = person.get("name");
    const age = person.get("age");
  
    alert(`Name: ${name} age: ${age}`);
  } catch (error) {
    alert(`Failed to retrieve the object, with error code: ${error.message}`);
  }
}  

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
