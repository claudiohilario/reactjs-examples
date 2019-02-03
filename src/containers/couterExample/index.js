import React from "react";

class CounterExample extends React.Component {
  state = {
    count: 0
  };

  handleClick = () => this.setState(state => ({ count: state.count + 1 }));
  handleReset = () => this.setState({ count: 0 });

  render() {
    const { dark } = this.props;
    const theme = dark ? "dark" : "";
    return (
      <div className={`clickerLayout ${theme}`}>
        <span className="clickerCount" onClick={this.handleClick}>
          {this.state.count}
        </span>
        <button className="primary" onClick={this.handleReset}>
          Reset
        </button>
      </div>
    );
  }
}

CounterExample.defaultProps = {
  dark: true
};

export default CounterExample;
