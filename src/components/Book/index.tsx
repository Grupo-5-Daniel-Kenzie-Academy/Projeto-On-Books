import * as S from "./style";
import { useContext } from "react";
import { DashContext } from "../../contexts/DashboardContext/DashContext";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext/AuthContext";
/* import { Ranking } from "../Ranking"; */


export function Book() {
  const { addReadBooks ,setInfBook } = useContext(DashContext);
  const { filterList,  } = useContext(AuthContext);


  return (
    <S.StyleUl>
      {filterList.map((element,index) => (
        <li key={index}>
          <figure>
            <img className="imgBook" src={element.img} alt="" />
          </figure>
          {/* <Ranking /> */}
          <p>{element.alternative}</p>
          <div>
            <Link
              to="/description"
              onClick={() => {setInfBook(element)
                /* setDescriptionModal(true) */
                //setItem(element)
                localStorage.setItem("book", JSON.stringify(element))
              }}
            >
              Exibir
            </Link>
            <button className="ButFavorite">
              <img
                // src={iconHeart}
                alt="botão de favoritar"
                onClick={() => {
                  addReadBooks(element);
                }}
              />
             {/*  {favoritModal ? <ModalFavorit /> : null} */}
            </button>
          </div>
        </li>
      ))}
    </S.StyleUl>
  );
}
