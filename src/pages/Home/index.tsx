import { Header } from "../../components/Header";
import * as S from "./style";

export const Home = () => {
  return (
    <>
      <Header
        route1={"/register"}
        route2={"/login"}
        nameRoute1={"Cadastrar"}
        nameRoute2={"Login"}
      />
      <S.Main>
        <div>
         <h3><strong>Conecte-se</strong> <br/> aos livros</h3>
         <p>Aqui você vai encontrar <br /> o melhor da literatura. </p>
        </div>
      </S.Main>
    </>
  );
};
