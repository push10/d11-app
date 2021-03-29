import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import contest from "./contest";

export default combineReducers({
  auth,
  message,
  contest,
});
