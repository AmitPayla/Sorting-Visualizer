import "./component/area.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Sort from "./component/area.jsx";
import "./component/area.css";
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Sort></Sort>
      </div>
    );
  }
}

export default App;
