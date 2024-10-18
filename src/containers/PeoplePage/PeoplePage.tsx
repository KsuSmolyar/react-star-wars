import { useState, useEffect } from 'react';
import { getApiResource } from '../../utils/network';
import { API_PEOPLE } from "../../constants/api";
import { getPeopleId, getPeopleImage, getPeoplePageId } from "../../services/getPeopleData";
import { withErrorApi } from "../../hoc-helpers/withErrorApi";

import styles from "./PeoplePage.module.css";
import PeopleList from '../../components/PeoplePage/PeopleList';
import { useQueryParams } from '../../hooks/useQueryParams';
import PeopleNavigation from '../../components/PeoplePage/PeopleNavigation';

interface IProps {
  setErrorApi?: React.Dispatch<boolean>;
 }

 type PeopleListItem = {
  id: string;
  img: string;
  name: string;
}

const PeoplePage = ({setErrorApi}: IProps) => {
  const [people, setPeople] = useState<PeopleListItem[]>([]);
  const [prevPage, setPrevPage] = useState<string>("");
  const [nextPage, setNextPage] = useState<string>("");
  const [counterPage, setCounterPage] = useState<number>(1);

  const query = useQueryParams();
  const queryPage = query.get("page");

  const getResource = async (url: string) => {
    const res = await getApiResource(url);

    if (res) {
      const peopleList = res.results.map(({ name, url }: {name: string, url: string}) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);
        
        return { id, name, img }
      })
      
      setPeople(peopleList);
      setCounterPage(getPeoplePageId(url));
      setPrevPage(res.previous);
      setNextPage(res.next);
      setErrorApi?.(false);
    } else {
      setErrorApi?.(true);
    }
  }

  useEffect(() => {
    getResource(API_PEOPLE + queryPage);
  }, []);

  return (
    <div className={styles.block}>
        <>
          <PeopleNavigation getResource={getResource} prevPage={prevPage} nextPage={nextPage} counterPage={counterPage}/>
          {!!people.length && <PeopleList people={people}/>}
        </>
    </div>
  )
}
 export default withErrorApi(PeoplePage);
