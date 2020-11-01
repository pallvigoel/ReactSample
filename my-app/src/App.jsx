import React from "react";
import ReactDOM from "react-dom";

class FirstComponent extends React.Component {
  render() {
    return <h2>Hi, I am a First Component</h2>;
  }
}
class SecondComponent extends React.Component {
  render() {
    return <h2>Hi, I am a Second Component</h2>;
  }
}

ReactDOM.render(<FirstComponent />, document.getElementById('first-component'));
ReactDOM.render(<SecondComponent />, document.getElementById('second-component'));
export default FirstComponent;
