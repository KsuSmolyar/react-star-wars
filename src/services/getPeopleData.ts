import { SWAPI_ROOT, HTTPS, SWAPI_PEOPLE, URL_IMAGE_PERSON, GUIDE_IMG_EXTENSION, SWAPI_PARAM_PAGE } from "../constants/api";

const getId = (url: string, category: string): string => {
  const id = url
    .replace(HTTPS+SWAPI_ROOT+category, "")
    .replace(/\//g, "");
  return id;
}

export const getPeoplePageId = (url: string) => {
  const pos = url.lastIndexOf(SWAPI_PARAM_PAGE);
  const id = url.slice(pos + SWAPI_PARAM_PAGE.length, url.length)
  return Number(id);
}
export const getPeopleId = (url: string) => {
  return getId(url, SWAPI_PEOPLE)
}

export const getPeopleImage = (id:string | undefined): string => `${URL_IMAGE_PERSON}/${id+GUIDE_IMG_EXTENSION}`
