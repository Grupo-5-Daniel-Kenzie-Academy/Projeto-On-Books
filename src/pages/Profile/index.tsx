import { useContext, useEffect, useState } from "react";
import { DashContext } from "../../contexts/DashboardContext/DashContext";
import { StyleHeader, StyleMain } from "./style";

import icone from "../../assets/img/logoutIcon.svg";
import logoTitle from "../../assets/img/mewLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { ListBooks } from "../../components/ListRead";
import { ListNoRead } from "../../components/ListNoRead";

export function Profile() {
  const { userInfo, read, noRead, readBooks, noReadBooks } =
    useContext(DashContext);

  const navigate = useNavigate();

  useEffect(() => {
    readBooks();
    noReadBooks();
    console.log('boa')
  }, []);
  
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

            <div className="divUserInfo">
              <p>Nome: {userInfo.name}</p>
              <p>E-mail: {userInfo.email}</p>
            </div>
          </div>
        </aside>
        <div className="ListaUls">
          <div>
            <h1>Desejo ler</h1>
            <ul>{noRead && noRead.map((element) => ListNoRead(element))}</ul>
          </div>
          <div>
            <h1>Já lidos</h1>
            <ul>{read && read.map((element) => ListBooks(element))}</ul>
          </div>
        </div>
      </StyleMain>
    </>
  );
}
