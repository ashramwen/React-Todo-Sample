import React, { Component } from 'react';
// import { List } from "immutable";
// import logo from "./logo.svg";

import './App.scss';

import TodoList from './component/TodoList';
import Add from './component/Add';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <Add />
        </div>
        <TodoList />
      </div>
    );
  }
}

export default App;
