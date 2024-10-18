import ErrorMessage from "../components/ErrorMessage";
import FavoritePage from "../containers/FavoritePage";
import HomePage from "../containers/HomePage";
import NotFoundPage from "../containers/NotFoundPage";
import PeoplePage from "../containers/PeoplePage";
import PersonPage  from "../containers/PersonPage";
import SearchPage from "../containers/SearchPage";

const routesConfig = [
  { 
    path: "/",
    component: HomePage
  },
  { 
    path: "/people",
    component: PeoplePage
  },
  { 
    path: "/search",
    component: SearchPage
  },
  { 
    path: "/fail",
    component: ErrorMessage
  },
  { 
    path: "/people/:id",
    component: PersonPage
  },
  { 
    path: "/not-found",
    component: NotFoundPage
  },
  { 
    path: "/favorites",
    component: FavoritePage
  },
  { 
    path: "*",
    component: NotFoundPage
  }
]

export default routesConfig;
