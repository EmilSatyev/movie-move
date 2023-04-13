const defaultState = {
  movies: [],
  filters: {
    genre: [],
  },
  sortBy: "popular",
  status: "loading",
  errorMessage: "",
  pagination: {
    page: null,
    totalPages: null,
  },
};
const SET_MOVIES = "SET_MOVIES";
const SET_MOVIES_STATUS = "SET_MOVIES_STATUS";
const SET_FILTERS = "SET_FILTERS";
const SET_SORT_BY = "SET_SORT_BY";
const SET_PAGINATION = "SET_PAGINATION";
const SET_MOVIES_PAGE = "SET_MOVIES_PAGE";

export const moviesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, movies: action.payload };
    case SET_MOVIES_STATUS:
      return {
        ...state,
        status: action.payload,
        errorMessage: action.payload === "error" ? "moviesError" : "",
      };
    case SET_FILTERS:
      const { filterBy, value } = action.payload;
      return {
        ...state,
        filters: {
          [filterBy]: value,
        },
      };
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };
    case SET_PAGINATION:
      return { ...state, pagination: action.payload };
    case SET_MOVIES_PAGE:
      return {
        ...state,
        pagination: { ...state.pagination, page: action.payload },
      };
    default:
      return state;
  }
};

export const setMovies = (payload) => ({ type: SET_MOVIES, payload });
export const setMoviesStatus = (payload) => ({
  type: SET_MOVIES_STATUS,
  payload,
});
export const setFilters = (payload) => ({ type: SET_FILTERS, payload });
export const setSortBy = (payload) => ({ type: SET_SORT_BY, payload });
export const setMoviesPagination = (payload) => ({
  type: SET_PAGINATION,
  payload,
});
export const setMoviesPage = (payload) => ({ type: SET_MOVIES_PAGE, payload });
