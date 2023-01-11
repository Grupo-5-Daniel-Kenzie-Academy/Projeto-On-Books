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
      <h2>{element.title}</h2>
      <button onClick={() => RemoveReadBooks(element.id)}>Remover</button>
    </Licard>
  );
}
