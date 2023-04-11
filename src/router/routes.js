import { NotFound } from "../components/common/NotFound/NotFound";
import {
  ActorPage,
  Actors,
  ActorSearch,
  Home,
  MoviePage,
  MovieSearch,
} from "../components/pages";

export const navigationRoutes = [
  { path: "", title: "moviesWord", component: Home },
  { path: "actors", title: "actorsWord", component: Actors },
  { path: "movie/:movieId", component: MoviePage },
  { path: "actor/:actorId", component: ActorPage },
  {
    path: "search_movie/:searchQuery",
    title: "Поиск фильма",
    component: MovieSearch,
  },
  {
    path: "search_actor/:searchQuery",
    title: "Поиск актера",
    component: ActorSearch,
  },
  { path: "*", title: "404", component: NotFound },
];
