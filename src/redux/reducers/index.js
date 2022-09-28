import { combineReducers } from "redux";
import { listReducer } from "./list.reducer";
import { favoriteReducer } from "./favorite.reducer";

export default combineReducers({
    listReducer,
    favoriteReducer,
})