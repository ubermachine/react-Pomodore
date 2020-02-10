import React from 'react';
//import ReactDOM from 'react-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from "jQuery";
import Pomodoro from './components/pomodoro';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Pomodoro/>
      </header>
      
    </div>
  );
}

export default App;
