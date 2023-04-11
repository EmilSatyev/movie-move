const defaultValue = {
  genres: [],
  status: "loading",
  errorMessage: "",
  selectedGenres: [],
};

const ADD_GENRES = "ADD_GENRES";
const SET_GENRES_STATUS = "SET_GENRES_STATUS";
const SET_SELECTED_GENRES = "SET_SELECTED_GENRES";
const CLEAR_SELECTED_GENRES = "CLEAR_SELECTED_GENRES";

export const genresReducer = (state = defaultValue, action) => {
  switch (action.type) {
    case ADD_GENRES:
      return { ...state, genres: [...action.payload] };
    case SET_GENRES_STATUS:
      return {
        ...state,
        status: action.payload,
        errorMessage:
          action.payload === "error"
            ? "genresError"
            : "",
      };
    case SET_SELECTED_GENRES:
      const { selectedGenres } = state;
      return {
        ...state,
        selectedGenres: selectedGenres.includes(action.payload)
          ? selectedGenres.filter((sg) => sg !== action.payload)
          : [...selectedGenres, action.payload],
      };
    case CLEAR_SELECTED_GENRES:
      return {
        ...state,
        selectedGenres: [],
      };
    default:
      return state;
  }
};
export const addGenres = (payload) => ({ type: ADD_GENRES, payload });
export const setGenresStatus = (payload) => ({ type: SET_GENRES_STATUS, payload });
export const setSelectedGenres = (payload) => ({
  type: SET_SELECTED_GENRES,
  payload,
});
export const clearSelectedGenres = (payload) => ({
  type: CLEAR_SELECTED_GENRES, payload
});
