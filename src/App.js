import React, { Component } from "react";
import { List } from "immutable";
// import logo from "./logo.svg";
import "./App.scss";

import TodoList from "./component/TodoList";
import Add from "./component/Add";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      text: ""
    };
    this.textInput = React.createRef();
  }

  onAdd = text => {
    this.setState({
      items: [...this.state.items, text],
      text: ""
    });
  };

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  delete = i => {
    let items = [...this.state.items];
    items.splice(i, 1);
    this.setState({
      items: items
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <Add onAdd={this.onAdd} />
        </div>
        <TodoList items={this.state.items} delete={this.delete} />
      </div>
    );
  }
}

export default App;
