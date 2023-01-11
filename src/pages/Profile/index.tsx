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
    console.log("boa");
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
            <figure>
              <img src={userInfo.image} alt="bolsominion" />
            </figure>

            <div className="divUserInfo">
              <p>Nome: {userInfo.name}</p>
              <p>E-mail: {userInfo.email}</p>
            </div>
          

        </aside>


        <section className="ListaUls">
          <div className="container">
            <h2>Desejo ler</h2>
            <ul>{noRead.length==0?<div className="containerNot"><h3>Nenhum livro adicionado</h3><span>{':('}</span></div>:noRead.map((element) => ListNoRead(element))}</ul>
          </div>
          <div className="containerTwo">
            <h2>Já lidos</h2>
            <ul>{read.length==0?<div className="containerNotRead"><h3>Nenhum livro adicionado</h3><span>{':('}</span></div>:read.map((element) => ListBooks(element))}</ul>
          </div>
        </section>
      </StyleMain>
    </>
  );
}
