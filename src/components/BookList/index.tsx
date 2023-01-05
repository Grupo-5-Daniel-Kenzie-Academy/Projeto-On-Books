import { IBooks } from "../../testeDB";
import { Book } from "./Book";
import * as S from "./style";

interface iBookList {
  ListBooks: IBooks[];
}

export function BookList({ ListBooks }: iBookList) {
  return (
    <>
      {/* {filteredProducts.length > 0 ? (
        <S.Ul>
          {filteredProducts.map((element) => (
            <Product key={element.id} element={element} />
          ))}
        </S.Ul>
      ) : ( */}
      <S.StyleUlBooks>
        {ListBooks.map((element) => (
          <Book key={element.id} element={element} />
        ))}
      </S.StyleUlBooks>
    </>
  );
}
