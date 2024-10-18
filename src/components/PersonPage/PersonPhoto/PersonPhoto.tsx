import { removePersonFromFavorite, setPersonToFavorite } from "../../../store/actions";
import { useAppDispatch } from "../../../store/hooks";
import styles from "./PersonPhoto.module.css";
import { FavoriteIcon } from "./img/images";

interface IProps {
  imgSrc: string;
  alt: string;
  personId: string | undefined;
  isPersonFavorite: boolean;
  onSetPersonFavorite: (value: true|false) => void;
}

export const PersonPhoto = ({imgSrc, alt, personId, isPersonFavorite, onSetPersonFavorite}: IProps) => {
  const dispatch = useAppDispatch();

  if (!personId) return null;

  const dispatchFavoritePeople = () => {
    if (isPersonFavorite) {
      dispatch(removePersonFromFavorite(personId));
    onSetPersonFavorite(false);
    } else {
      dispatch(setPersonToFavorite({
        [personId]: {
          name: alt,
          img: imgSrc
        }
      }));
      onSetPersonFavorite(true);
    }
  }

  return (
    <>
    <div className={styles.personPhoto}>
      <img className={styles.personPhoto__image} src={imgSrc} alt={alt} />
      <FavoriteIcon isFav={isPersonFavorite} onClick={dispatchFavoritePeople}/>
    </div>
    </>
  )
}
