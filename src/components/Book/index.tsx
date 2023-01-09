import { IBooks } from "../../testeDB";
// import iconHeart from "../../../assets/img/iconeHeart.svg";
import { liCategorie } from "../Categories";
import * as S from "./style";
import { useContext } from "react";
import { DashContext } from "../../contexts/DashboardContext/DashContext";
import { ModalFavorit } from "../ModalFavorit";
import { ModalDescription } from "../ModalDescription";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext/AuthContext";
import { Ranking } from "../Ranking";

// export function Book({ element }: { element: IBooks }) {
export function Book() {
  const { addReadBooks } = useContext(DashContext);
  const { filterList } = useContext(AuthContext);
  const { favoritModal, setFavoritModal } = useContext(DashContext);
  const { descriptionModal, setDescriptionModal } = useContext(DashContext);
  const { item, setItem } = useContext(DashContext);


  return (
    <S.StyleUl>
      {filterList.map((element) => (
        <li>
          <figure>
            <img className="imgBook" src={element.img} alt="" />
          </figure>
          <Ranking />
          <p>{element.alternative}</p>
          <div>
            <Link
              to="/description"
              onClick={() => {
                /* setDescriptionModal(true) */
                setItem(element);
              }}
            >
              Exibir
            </Link>
            {descriptionModal ? <ModalDescription element={item} /> : null}
            <button className="ButFavorite">
              <img
                // src={iconHeart}
                alt="botão de favoritar"
                onClick={() => {
                  addReadBooks(element);
                  setFavoritModal(true);
                }}
              />
              {favoritModal ? <ModalFavorit /> : null}
            </button>
          </div>
        </li>
      ))}
    </S.StyleUl>
  );
}
