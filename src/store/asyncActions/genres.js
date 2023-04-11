import axios from "axios";
import { addGenres, setGenresStatus } from "../genresReducer";
import { API_KEY } from "../../constants";

export const fetchGenres = (lang) => {
  return function (dispatch) {
    axios(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=${lang}`
    )
      .then(({ data }) => {
        dispatch(setGenresStatus("success"));
        dispatch(addGenres(data.genres));
      })
      .catch(() => {
        dispatch(setGenresStatus("error"));
      });
  };
};
