import translateReducers from "./translateReducer";
import {combineReducers} from "redux";

//tổng hợp các reducer của các chức năng khác
const rootReducer = combineReducers({
	todo : translateReducers,
	});
export default rootReducer;