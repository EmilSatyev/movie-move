import { applyMiddleware, combineReducers, createStore } from "redux";
import { moviesReducer } from "./moviesReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { genresReducer } from "./genresReducer";
import { actorsReducer } from "./actorsReducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  genres: genresReducer,
  actors: actorsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
