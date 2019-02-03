import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import App from "./App";
import CounterExample from "./containers/couterExample";
import ExampleComponent from "./components/ExampleComponent";

const Router = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/example" exact component={ExampleComponent} />
        <Route path="/counter-example" exact component={CounterExample} />
        <Redirect from="*" to="/" />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
