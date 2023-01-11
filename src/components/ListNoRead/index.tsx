import React, { useContext } from "react";
import {
  DashContext,
  IBooks,
} from "../../contexts/DashboardContext/DashContext";

import { Licard } from "./style";

export function ListNoRead(element: IBooks) {
  const { RemoveNoReadBooks } = useContext(DashContext);

  return (
    <Licard>
      <img className="imgBook" src={element.img} alt={element.title} />
      <h2>{element.title}</h2>
      <button onClick={() => RemoveNoReadBooks(element.id)}>Remover</button>
    </Licard>
  );
}
