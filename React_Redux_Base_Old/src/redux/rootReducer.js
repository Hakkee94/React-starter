import {combineReducers} from "redux";
import likes from "./likeReducer";
import listReducer from "./listReducer";

export const rootReducer = combineReducers({
    likes, listReducer

})