import { getLocalStorage } from "../../utils/localStorage";
import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE } from "../constants/actionTypes";

type FavoriteReducerType = 'ADD_PERSON_TO_FAVORITE' | 'REMOVE_PERSON_FROM_FAVORITE';

type FavReducerAddPayload = {
  [key: string]: {
    name: string;
    img: string;
  }
};

type FavReducerRemovePayload = string;

export interface IFavState {
  [key: string]: {
    name: string;
    img: string;
  }
}

interface IFavAction<Type, Payload> {
  type: Type;
  payload: Payload;
}

const initialState = getLocalStorage("store");

const favoriteReducer = (state: IFavState = initialState, action: IFavAction<FavoriteReducerType, FavReducerAddPayload | FavReducerRemovePayload>) => {
  switch (action.type) {
    case ADD_PERSON_TO_FAVORITE: {
      if (typeof action.payload === "string") return state;
      return {
        ...state,
        ...action.payload
      }}
    case REMOVE_PERSON_FROM_FAVORITE: {
      const filteredState: IFavState = {};
      for (const key in state) {
        if (key !== action.payload) {
          filteredState[key] = state[key];
        }
      }
      return filteredState;
    }
    default: 
      return state;
  }
}

export { favoriteReducer };
