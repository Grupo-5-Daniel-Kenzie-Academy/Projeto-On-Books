import { IBooks } from "../../../testeDB";
import iconHeart from "../../../assets/img/iconeHeart.svg";
import { liCategorie } from "../../Categories";
import * as S from "./style";
import { useContext } from "react";
import { DashContext } from "../../../contexts/DashboardContext/DashContext";
import { ModalFavorit } from "../../ModalFavorit";
import { ModalDescription } from "../../ModalDescription";
import { Link } from "react-router-dom";

export function Book({ element }: { element: IBooks }) {
  const { addReadBooks } = useContext(DashContext)
  const {favoritModal, setFavoritModal} = useContext(DashContext)
  const {descriptionModal, setDescriptionModal} = useContext(DashContext)
  const {item, setItem} = useContext(DashContext)


  return (
    <S.StyleLi >
      <figure>
        <img className="imgBook" src={element.img} alt="" />
      </figure>

      {/* <ul>{element.categories.map((elem) => liCategorie({ elem }))}</ul> */}
      {/* <p>{element.categories[0]}</p> */}

      <p>{element.title}</p>
      
      <div>
      
        <Link to="/description" onClick={() => {
          /* setDescriptionModal(true) */
          setItem(element) 
          

        }}
        >Exibir</Link>
        {descriptionModal ? <ModalDescription element={item} /> : null}
        <button className="ButFavorite">
          <img src={iconHeart} alt="botão de favoritar" onClick={() => {
            addReadBooks(element)
            setFavoritModal(true)
          }} />
          {favoritModal ? <ModalFavorit /> : null}

        </button>
      </div>
    </S.StyleLi>
  );
}
