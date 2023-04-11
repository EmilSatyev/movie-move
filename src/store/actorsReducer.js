const defaultState = {
  actors: [],
  status: "loading",
  errorMessage: "",
  pagination: {
    page: null,
    totalPages: null,
  },
};

const SET_ACTORS = "SET_ACTORS";
const SET_ACTORS_STATUS = "SET_ACTORS_STATUS";
const SET_ACTORS_PAGINATION = "SET_ACTORS_PAGINATION";
const SET_ACTORS_PAGE = "SET_ACTORS_PAGE";

export const actorsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_ACTORS:
      return { ...state, actors: action.payload };
    case SET_ACTORS_STATUS:
      return {
        ...state,
        status: action.payload,
        errorMessage:
          action.payload === "error" ? "actorsError" : "",
      };
    case SET_ACTORS_PAGINATION:
      return { ...state, pagination: action.payload };
    case SET_ACTORS_PAGE:
      return {
        ...state,
        pagination: { ...state.pagination, page: action.payload },
      };
    default:
      return state;
  }
};

export const setActors = (payload) => ({ type: SET_ACTORS, payload });
export const setStatus = (payload) => ({ type: SET_ACTORS_STATUS, payload });
export const setActorsPagination = (payload) => ({
  type: SET_ACTORS_PAGINATION,
  payload,
});
export const setActorsPage = (payload) => ({ type: SET_ACTORS_PAGE, payload });
