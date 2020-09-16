import { createStore, compose, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducer";

const store: Store = createStore(reducers, {}, compose(applyMiddleware(thunk)));

export default store;