import { IFavState } from "../store/reducers/favoriteReducer";

export const getLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  if (data !== null) {
    return JSON.parse(data);
  }

  return {};
};

export const setLocalStorage = (key: string, data: IFavState) => {
  localStorage.setItem(key, JSON.stringify(data));
};
