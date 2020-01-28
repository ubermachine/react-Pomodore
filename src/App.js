import React from 'react';
//import ReactDOM from 'react-dom'
import './App.scss';
import Markdown from './components/markdown'
import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from "jQuery";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Markdown/>
      </header>
    </div>
  );
}

export default App;
