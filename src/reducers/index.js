import { combineReducers } from "redux";
import alert from "./alert";
import vocabulary from "./vocabulary";
import greetings from "./greetings";

export default combineReducers({
    alert,
    vocabulary,
    greetings
});
