import ErrorMessage from "../components/ErrorMessage";
import FavoritePage from "../containers/FavoritePage";
import HomePage from "../containers/HomePage";
import NotFoundPage from "../containers/NotFoundPage";
import PeoplePage from "../containers/PeoplePage";
import PersonPage  from "../containers/PersonPage";
import SearchPage from "../containers/SearchPage";

const routesConfig = [
  {
    path: "/react-star-wars",
    component: HomePage,
  },
  {
    path: "/react-star-wars/people",
    component: PeoplePage,
  },
  {
    path: "/react-star-wars/search",
    component: SearchPage,
  },
  {
    path: "/react-star-wars/fail",
    component: ErrorMessage,
  },
  {
    path: "/react-star-wars/people/:id",
    component: PersonPage,
  },
  {
    path: "/react-star-wars/not-found",
    component: NotFoundPage,
  },
  {
    path: "/react-star-wars/favorites",
    component: FavoritePage,
  },
  {
    path: "*",
    component: NotFoundPage,
  },
];

export default routesConfig;
