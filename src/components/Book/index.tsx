import * as S from "./style";
import { useContext } from "react";
import { DashContext } from "../../contexts/DashboardContext/DashContext";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext/AuthContext";
import  iconHeart from '../../assets/img/iconeHeart.svg'
/* import { Ranking } from "../Ranking"; */


export function Book() {
  const { addReadBooks ,setInfBook } = useContext(DashContext);
  const { filterList,  } = useContext(AuthContext);


  return (
    <S.StyleUl>
      {filterList.map((element,index) => (
        <li key={index}>
            <img className="imgBook" src={element.img} alt="" />
          
          {/* <Ranking /> */}
          <div className="divInfoBO">
            <p>{element.alternative}</p>
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
          </div>
        </li>
      ))}
    </S.StyleUl>
  );
}
