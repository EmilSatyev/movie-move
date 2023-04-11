import axios from "axios";
import {setActors, setActorsPagination, setStatus} from "../actorsReducer";
import {API_KEY} from "../../constants";

export const fetchActors = ({ page = 1, searchQuery }) => {
  let url = "";
  if (searchQuery) {
    url = `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&language=ru-RU&query=${searchQuery}&page=${page}&include_adult=false`;
  } else {
    url = `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=ru-RU&page=${page}`;
  }

  return function (dispatch) {
    axios(url)
      .then(({ data }) => {
        dispatch(setActors(data.results));
        dispatch(setStatus("success"));
        dispatch(
          setActorsPagination({ page: data.page, totalPages: data.total_pages })
        );
      })
      .catch(() => dispatch(setStatus("error")));
  };
};
