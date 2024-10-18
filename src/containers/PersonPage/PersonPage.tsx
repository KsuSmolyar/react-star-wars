import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getApiResource } from "../../utils/network";
import { API_PERSON } from "../../constants/api";
import { withErrorApi } from "../../hoc-helpers/withErrorApi";
import styles from "./PersonPage.module.css";
import { getPeopleImage } from "../../services/getPeopleData";
import { IPersonInfo } from "../../types/people";
import PersonInfo from "../../components/PersonPage/PersonInfo";
import PersonPhoto from "../../components/PersonPage/PersonPhoto";
import PersonLinkBack from "../../components/PersonPage/PersonLinkBack";
import UiLoading from "../../components/UI/UiLoading";
import { useAppSelector } from "../../store/hooks";

const PersonFilms =  React.lazy(() => import ("../../components/PersonPage/PersonFilms"));

interface IProps {
  setErrorApi?: React.Dispatch<boolean>;
 }


const PersonPage = ({setErrorApi}: IProps) => {
  const storeData = useAppSelector(state => state.favoriteReducer);

  const [personInfo, setPersonInfo] = useState<IPersonInfo[]>([]);
  const [personName, setPersonName] = useState("");
  const [personPhoto, setPersonPhoto] = useState("");
  const [personFilms, setPersonFilms] = useState<string[]>([]);
  const [personFavorite, setPersonFavorite] = useState<boolean>(false);

  const {id} = useParams();

  useEffect(() => {
    const getPerson = async () => {
    const res = await getApiResource(`${API_PERSON}/${id}/`); 

    if (id && storeData[id]) {
      setPersonFavorite(true)
    } else {
      setPersonFavorite(false)
    }
    
      if (res) {
        setPersonInfo([
          { title: "height", data: res.height},
          { title: "mass", data: res.mass},
          { title: "skin_color", data: res.skin_color},
          { title: "hair_color", data: res.hair_color},
          { title: "eye_color", data: res.eye_color},
          { title: "birth_year", data: res.birth_year},
          { title: "gender", data: res.gender}
        ]);
        setPersonName(res.name);
        setPersonPhoto(getPeopleImage(id));
        if (res.films.length) {
          setPersonFilms(res.films);
        }
        setErrorApi?.(false);
      } else {
        setErrorApi?.(true);
      }
    }

    getPerson();
  }, [id])
  return (
    <>
    <PersonLinkBack/>
      <div className={styles.personPage}>
        <span className={styles.personPage__title}>{personName}</span>
        <div className={styles.personPage__infoBlock}>
          {!!personPhoto && <PersonPhoto personId={id} imgSrc={personPhoto} alt={personName} isPersonFavorite={personFavorite} onSetPersonFavorite={setPersonFavorite}/>}
          {!!personInfo && <PersonInfo personInfo={personInfo}/>}
          {!!personFilms.length && (
              <Suspense fallback={<UiLoading/>}>
                <PersonFilms personFilms={personFilms}/>
              </Suspense>
            )}
        </div>
      </div>
    </>
  )
}
// export default PersonPage;

export default withErrorApi(PersonPage);
