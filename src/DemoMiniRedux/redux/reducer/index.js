import { combineReducers } from "redux";
import { numberReducer } from "./numberReducer";

export let rootReducer = combineReducers({
  numberReducer,
});
