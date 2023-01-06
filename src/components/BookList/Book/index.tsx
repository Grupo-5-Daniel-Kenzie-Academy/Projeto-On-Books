import { IBooks } from "../../../testeDB";
import iconHeart from "../../../assets/img/iconeHeart.svg";
import { liCategorie } from "../../Categories";
import * as S from "./style";
import { useContext } from "react";
import { DashContext } from "../../../contexts/DashboardContext/DashContext";

export function Book({ element }: { element: IBooks }) {
  const { addReadBooks } = useContext(DashContext)
console.log(element)
  return (
    <S.StyleLi >
      <figure>
        <img className="imgBook" src={element.img} alt="" />
      </figure>

      {/* <ul>{element.categories.map((elem) => liCategorie({ elem }))}</ul> */}
      {/* <p>{element.categories[0]}</p> */}

      <p>{element.title}</p>
      <div>
        <button>Exibir</button>
        <button className="ButFavorite">
          <img src={iconHeart} alt="botão de favoritar" onClick={() => addReadBooks(element)} />
        </button>
      </div>
    </S.StyleLi>
  );
}
