import React from "react";
import './App.css';
import Steps from "../src/components/Steps";

const tempMin = -20
const tempxMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Steps />
          <p>Heart : {this.heartMin}</p>
          <p>Temperature : {this.tempsMin}</p>
          <p>Steps : {this.stepsMin}</p>
        </div>
      </div>
    );
  }
}

export default App;
