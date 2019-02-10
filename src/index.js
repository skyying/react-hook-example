import "./style/main.scss";
import React from "react";
import ReactDOM from "react-dom";
import { FunctionalCompInput } from "./components/FunctionalCompInput.js";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <FunctionalCompInput />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("main"));
