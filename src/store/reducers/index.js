import {combineReducers} from "redux";
import coinList from "./coinList";
import coinItem from "./coinItem";

export default combineReducers({
  list: coinList,
  item: coinItem
})