import axios from "axios";
import {
  setMovies,
  setMoviesPagination,
  setMoviesStatus,
} from "../moviesReducer";
import { API_KEY } from "../../constants";

export const fetchMovies = ({
  filters,
  sortBy,
  page = 1,
  searchQuery,
  lang,
}) => {
  let url = "";
  if (searchQuery) {
    url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=${lang}&page=${page}&include_adult=false&query=${searchQuery}`;
  } else {
    const genresFilter = filters.genre.length
      ? `&with_genres=${filters.genre.join()}`
      : "";
    const sortByName = Object.keys(sortBy).length
      ? `&sort_by=${sortBy.name}.${sortBy.order}`
      : "";
    url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}${genresFilter}${sortByName}&language=${lang}&page=${page}`;
  }
  return function (dispatch) {
    axios(url)
      .then(({ data }) => {
        dispatch(setMoviesStatus("success"));
        dispatch(setMovies(data.results));
        dispatch(
          setMoviesPagination({ page: data.page, totalPages: data.total_pages })
        );
      })
      .catch(() => {
        dispatch(setMoviesStatus("error"));
      });
  };
};
