import postReducer from './postSlice'
import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import {logger} from "redux-logger/src";

const store = createStore(postReducer, applyMiddleware(thunk, logger))
export default store