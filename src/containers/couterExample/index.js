import React from "react";

const PrimaryButton = props => <button {...props} className="primary" />;
const ClickerCount = props => <span {...props} className="clickerCount" />;

const ClickerLayout = ({ className = "", ...props }) => {
  return <div {...props} className={`clickerLayout ${className}`} />;
};

const ClickerLayoutDark = props => (
  <ClickerLayout className="dark" {...props} />
);

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

const CounterExample = () => {
  return (
    <Counter>
      {([count, updateCount]) => {
        return (
          <ClickerLayoutDark>
            <ClickerCount onClick={() => updateCount(count + 1)}>
              {count}
            </ClickerCount>
            <PrimaryButton onClick={() => updateCount(0)}>Reset</PrimaryButton>
          </ClickerLayoutDark>
        );
      }}
    </Counter>
  );
};

CounterExample.defaultProps = {
  dark: true
};

export default CounterExample;
