import {combineReducers} from "redux";
import {clientsReducer} from "./clientsReducer";

export const rootReducer = combineReducers({
    loginReducer: clientsReducer
})