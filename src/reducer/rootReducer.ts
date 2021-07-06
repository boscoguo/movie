import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import movieDetailReducer from "./movieDetailReducer";

const RootReducer = combineReducers({
    movie: movieReducer,
    movieDetail: movieDetailReducer
});

export default RootReducer;