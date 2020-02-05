import React from 'react';
//import ReactDOM from 'react-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from "jQuery";
import Calculator from './components/calculator'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Calculator/>
      </header>
      
    </div>
  );
}

export default App;
