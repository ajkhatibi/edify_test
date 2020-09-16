import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/home';
import Detail from './pages/detail';
import Favorite from './pages/favorite';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/detail/:title/:body">
              <Detail />
            </Route>
            <Route path="/favorite">
              <Favorite />
            </Route>
          </Switch>
        </div>

      </Router>
    </Provider>
  );
}

export default App;
