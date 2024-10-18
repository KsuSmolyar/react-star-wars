import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE } from "../constants/actionTypes";

interface IPerson {
  [key: string]: {
    name: string;
    img: string;
  };
}

export const setPersonToFavorite = (person: IPerson) => ({
  type: ADD_PERSON_TO_FAVORITE,
  payload: person
}as const);

export const removePersonFromFavorite = (personId: string) => ({
  type: REMOVE_PERSON_FROM_FAVORITE,
  payload: personId
}as const);
