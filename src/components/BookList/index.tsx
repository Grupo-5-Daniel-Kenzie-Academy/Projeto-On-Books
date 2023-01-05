import { useContext } from "react";
import { DashContext } from "../../contexts/DashboardContext/DashContext";
import { IBooks } from "../../testeDB";
import { Book } from "./Book";
import * as S from "./style";

interface iBookList {
  ListBooks: IBooks[];
}

export function BookList({ ListBooks }: iBookList) {
  const { filteredBooks } = useContext(DashContext);
  return (
    <>
      {filteredBooks.length > 0 ? (
        <S.StyleUlBooks>
          {filteredBooks.map((element) => (
            <Book key={element.id} element={element} />
          ))}
        </S.StyleUlBooks>
      ) : (
        <S.StyleUlBooks>
          {ListBooks.map((element) => (
            <Book key={element.id} element={element} />
          ))}
        </S.StyleUlBooks>
      )}
    </>
  );
}
