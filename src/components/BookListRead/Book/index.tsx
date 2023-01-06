import React, { useContext } from "react";
import { DashContext } from "../../../contexts/DashboardContext/DashContext";
import { StyleLi } from "./style";

export function BooksRead({element}) {

    const { addReadBooks } = useContext(DashContext)
  console.log(element);
  return (
    <StyleLi key={element.title}>
      <figure>
        <img className="imgBook" src={element.img} alt="" />
      </figure>

      {/* <ul>{element.categories.map((elem) => liCategorie({ elem }))}</ul> */}
      {/* <p>{element.categories[0]}</p> */}

      <p>{element.title}</p>
      <div>
        <button>Exibir</button>
        <button className="ButFavorite">
          <img
            alt="botão de favoritar"
            onClick={() => addReadBooks(element)}
          />
        </button>
      </div>
    </StyleLi>
  );
}
