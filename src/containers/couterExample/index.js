import React from "react";

class Counter extends React.Component {
  state = {
    count: 0
  };

  updateCount = val => this.setState({ count: val });

  render() {
    const stateTools = [this.state.count, this.updateCount];
    return this.props.children(stateTools);
  }
}

const Clicker = props => {
  const { count, dark, onClick, onReset } = props;
  const theme = dark ? "dark" : "";

  return (
    <div className={`clickerLayout ${theme}`}>
      <span className="clickerCount" onClick={onClick}>
        {count}
      </span>
      <button className="primary" onClick={onReset}>
        Reset
      </button>
    </div>
  );
};

const CounterExample = () => {
  return (
    <Counter>
      {([count, updateCount]) => {
        return (
          <Clicker
            count={count}
            onClick={() => updateCount(count + 1)}
            onReset={() => updateCount(0)}
          />
        );
      }}
    </Counter>
  );
};

CounterExample.defaultProps = {
  dark: true
};

export default CounterExample;
