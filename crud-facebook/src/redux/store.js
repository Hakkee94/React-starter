import postReducer from './postSlice'
import {createStore} from "redux";
const store = createStore(postReducer)

export default store