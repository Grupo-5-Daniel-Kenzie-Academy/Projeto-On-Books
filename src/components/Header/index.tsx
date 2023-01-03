import { Link } from "react-router-dom";
import Logo from "../../assets/img/Logo.svg";
import * as S from "./style";

interface iRoutes {
  route1: string;
  route2: string;
  nameRoute1: string;
  nameRoute2: string;
}

export function Header({ route1, route2, nameRoute1, nameRoute2 }: iRoutes) {
  return (
    <S.Header>
      <figure>
        <img src={Logo} alt="" />
      </figure>
      <div>
        <Link to={route1}>{nameRoute1}</Link>
        <Link to={route2}>{nameRoute2}</Link>
      </div>
    </S.Header>
  );
}
