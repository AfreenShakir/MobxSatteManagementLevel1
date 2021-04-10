import React, { Component } from "react";

import { observer } from "mobx-react";
import { extendObservable } from "mobx";
import "./styles.css";

class App extends Component {
  constructor() {
    super();

    extendObservable(this, {
      counter: 0
    });
  }

  onIncrement = () => {
    this.counter++;
  };

  onDecrement = () => {
    this.counter--;
  };

  render() {
    return (
      <div id="mount">
        {this.counter}
        <div>
          <div>
            <span className="increment">
              <button onClick={this.onIncrement} type="button">
                Increment
              </button>
            </span>
            <button onClick={this.onDecrement} type="button">
              Decrement
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default observer(App);
