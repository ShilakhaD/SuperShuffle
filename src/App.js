import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Aggregate extends Component {
  render(){
    return(
      <div style={{width:"40%", display:"inline-block"}}>
          <h2 style={{color:"#0000FF"}}>Number Text</h2>
      </div>
    )
  }
}

class Filter extends Component{
  render(){
    return (
      <div>
        <img/>
        <input type='text'/> Filter
      </div>
    )
  }
}

class PlayList extends Component{
  render(){
    return (
      <div style={{display:'inline-block', width:'25%'}}>
        <img/>
        <h3>PlayList Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
          </ul>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Title</h1>
        <Aggregate/>
        <Aggregate/>
        <Filter/>
        <PlayList/>
        <PlayList/>
        <PlayList/>
        <PlayList/>
      </div>
    );
  }
}

export default App;
