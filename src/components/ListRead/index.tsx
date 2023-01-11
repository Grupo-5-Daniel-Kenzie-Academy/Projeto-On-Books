import React, { useContext } from "react";
import {
  DashContext,
  IBooks,
} from "../../contexts/DashboardContext/DashContext";
import { Licard } from "./style";

export function ListBooks(element: IBooks) {
  const { RemoveReadBooks } = useContext(DashContext);

  return (
    <Licard>
      <img className="imgBook" src={element.img} alt={element.title} />
      <div className="divInfoBO">
        <p>{element.title}</p>
        <button className="btnRemove" onClick={() => RemoveReadBooks(element.id)}>Remover</button>
      </div>
    </Licard>
  );
}
