import React from 'react';
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';

import App from './App';
import ExampleComponent from './components/ExampleComponent';

const Router = () => (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/example" exact component={ExampleComponent} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
  
  export default Router;