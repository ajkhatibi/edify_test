import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/home';
import Favorite from './pages/favorites';
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
            <Route path="/favorite/:title/:body">
              <Favorite />
            </Route>
          </Switch>
        </div>

      </Router>
    </Provider>
  );
}

export default App;
