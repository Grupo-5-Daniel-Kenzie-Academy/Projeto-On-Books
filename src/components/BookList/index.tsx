import { useContext, useEffect } from "react";
import { DashContext } from "../../contexts/DashboardContext/DashContext";
import { IBooks } from "../../testeDB";
import { Book } from "./Book";
import * as S from "./style";

interface iBookList {
  ListBooks: IBooks[];
}

export function BookList({ ListBooks }: iBookList) {
  const {
    filteredBooks,
    categoryBooks,
    categoryFilter,
    filterCategoryFunction,
  } = useContext(DashContext);

  useEffect(() => {
    filterCategoryFunction();
  }, [categoryFilter]);

  return (
    <>
      {filteredBooks.length > 0 ? (
        <S.StyleUlBooks>
          {filteredBooks.map((element) => (
            <Book key={element.id} element={element} />
          ))}
        </S.StyleUlBooks>
      ) : categoryFilter === "todos" && categoryBooks.length == 0 ? (
        <S.StyleUlBooks>
          {ListBooks.map((element) => (
            <Book key={element.id} element={element} />
          ))}
        </S.StyleUlBooks>
      ) : (
        <S.StyleUlBooks>
          {categoryBooks.map((element) => (
            <Book key={element.id} element={element} />
          ))}
        </S.StyleUlBooks>
      )}
    </>
  );
}
