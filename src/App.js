import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.scss";

import List from "./component/List";
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
        <List items={this.state.items} delete={this.delete} />
      </div>
    );
  }
}

export default App;
