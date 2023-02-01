import { combineReducers } from "redux";
import { createStore, applyMiddleWare } from "redux";
import responseReducer from "./reposReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    repos: responseReducer
})


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleWare(thunk)));