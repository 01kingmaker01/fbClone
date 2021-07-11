import { createStore, applyMiddleware, compose } from "redux";
import { reducers } from "../reducer";
import thunk from "redux-thunk";

export const store = createStore(reducers, compose(applyMiddleware(thunk)));
