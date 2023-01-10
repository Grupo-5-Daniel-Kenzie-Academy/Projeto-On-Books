import { useContext } from "react";
import { DashContext } from "../../contexts/DashboardContext/DashContext";
import { StyleHeader, StyleMain } from "./style";

import icone from "../../assets/img/logoutIcon.svg";
import logoTitle from "../../assets/img/mewLogo.png";
import { Link, useNavigate } from "react-router-dom";

export function Profile() {
  const { userInfo } = useContext(DashContext);

  const navigate = useNavigate();

  function LogoutUser() {
    window.localStorage.clear();
    navigate("/");
  }

  return (
    <>
      <StyleHeader>
        <figcaption>
          <img src={logoTitle} alt="imagem de uma logo" />
        </figcaption>

        <Link to={"/dashboard"}>Inicio</Link>

        <div className="infUser">
          <p>{userInfo.name}</p>
          <img
            className="foto"
            src={userInfo.image}
            alt="Usuario"
            onClick={() => navigate("/profile")}
          />
          <img
            className="logout"
            onClick={() => LogoutUser()}
            src={icone}
            alt="Icone de logout"
          />
        </div>
      </StyleHeader>
      <StyleMain>
        <aside className="asideProfile">
          <div>
            <figure>
              <img src={userInfo.image} alt="" />
            </figure>
            <div></div>
          </div>
        </aside>
        <div className="ListaUls">
          <ul></ul>
          <ul></ul>
        </div>
      </StyleMain>
    </>
  );
}
