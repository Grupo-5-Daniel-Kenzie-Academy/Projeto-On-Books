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
      <div className="divInfoBO">
        <p>{element.title}</p>
        <button onClick={() => RemoveNoReadBooks(element.id)}>Remover</button>
      </div>
    </Licard>
  );
}
