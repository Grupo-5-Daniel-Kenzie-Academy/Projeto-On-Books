import { Header } from "../../components/Header";
import * as S from "./style";

export const Home = () => {
  return (
    <>
      <Header
        route1={"/login"}
        route2={"/register"}
        nameRoute1={"Login"}
        nameRoute2={"Cadastro"}
      />
      <S.Main>
        <div>
          <S.articleInfo>
            Em uma era onde a tecnologia é extremamente presente, é dificil
            ficar longe do computador e do celular, e ler um bom livro acaba
            sendo apenas um sonho em meio a rotina, então criamos a Li-Marus
            onde recomendamos você leitor a conhecer livros e se aventurar em
            suas páginas.
            <span>Deixe a imaginação fluir.</span>
          </S.articleInfo>
        </div>
      </S.Main>
    </>
  );
};
