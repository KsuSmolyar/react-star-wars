import styles from './SearchPage.module.css';

import { useEffect, useState } from "react";
import { getApiResource } from "../../utils/network";
import { API_SEARCH } from "../../constants/api";
import { withErrorApi } from "../../hoc-helpers/withErrorApi";
import { getPeopleId, getPeopleImage } from "../../services/getPeopleData";
import { PeopleListItem } from "../../types/people";
import SearchPageInfo from "../../components/SearchPage/SearchPageInfo";
import useDebounce from "../../hooks/useDebounce";
import UiInput from '../../components/UI/UiInput';

interface IProps {
  setErrorApi?: React.Dispatch<boolean>;
 }

const SearchPage = ({setErrorApi}: IProps) => {
  const [inputSearchValue, setInputSearchValue] = useState<string>("");
  const [people, setPeople] = useState<PeopleListItem[]>([]);
   // Состояние для статуса поиска (есть ли ожидающий запрос API)
   const [isSearching, setIsSearching] = useState<boolean>(false);

   const debouncedSearchPeople = useDebounce(inputSearchValue, 300);

  const getResponse = async(param: string) => {
      const res = await getApiResource(API_SEARCH + param);

      if (res) {
        const peopleList = res.results.map(({name, url}: {name: string, url: string}) => {
          const id = getPeopleId(url);
          const img = getPeopleImage(id);
          return {
            id,
            name,
            img
          }
        })
        setErrorApi?.(false);
        return peopleList;
      } else {
        setErrorApi?.(true);
      }

  };

  useEffect(() => {
    getResponse("");
  }, []);

  useEffect(
    () => {
      // Убедиться что у нас есть значение (пользователь ввел что-то)
      if (debouncedSearchPeople) {
        // Выставить состояние isSearching
        setIsSearching(true);
        // Сделать запрос к АПИ
        getResponse(debouncedSearchPeople).then(peopleList => {
          // Выставить состояние в false, так-как запрос завершен
          setIsSearching(false);
          // Выставит состояние с результатом
          setPeople(peopleList);
        });
      } else {
        setPeople([]);
      }
    },
    // Это массив зависимостей useEffect
    // Хук useEffect сработает только если отложенное значение изменится ...
    // ... и спасибо нашему хуку, что оно изменится только тогда ...
    // когда значение searchTerm не менялось на протяжении 500ms.
    [debouncedSearchPeople]
  );

  const handleInputChange = (value: string) => {
    // const value = e.target.value;
    setInputSearchValue(value);
    getResponse(value);
  }

  return (
    <>
    <h1 className="header__text">Search</h1>
    <UiInput
      type="text"
      value={inputSearchValue}
      handleInputChange={handleInputChange}
      placeholder="input character's name"
      classesProp={styles.inputSearch}
      />
      <div className={styles.searching}>{isSearching ? "Searching ..." : ""}</div>
      <SearchPageInfo people={people}/>
    </>
  )
}

export default withErrorApi(SearchPage);
