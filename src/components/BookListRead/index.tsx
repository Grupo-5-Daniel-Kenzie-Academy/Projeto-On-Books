import { useContext } from "react";
import { DashContext } from "../../contexts/DashboardContext/DashContext";
import { BooksRead } from "./Book";
import { StyleUl } from "./style";

export function BookListRead() {
  const { read, noRead } = useContext(DashContext);

  return (
    <div>
      <h2>Livros Para ler</h2>
      <StyleUl>
        {read && read.map((element) => <BooksRead element={element} />)}
      </StyleUl>
    </div>
  );
}
