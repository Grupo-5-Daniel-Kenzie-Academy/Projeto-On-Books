import { useNavigate } from "react-router-dom";
import logoTitle from "../../assets/img/Logo.svg";
import fotoRosto from "../../assets/img/rostinho.jpeg";
import icone from "../../assets/img/iconeLogout.svg";
import iconeLupa from "../../assets/img/iconeLupa.svg";
import { StyleMain, StyleHeader, StyleSectionPesq } from "./style";

import { ListBooks } from "../../testeDB";

import { ModalFavorit } from "../../components/ModalFavorit";
import { ModalDescription } from "../../components/ModalDescription";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { DashContext } from "../../contexts/DashboardContext/DashContext";
import { AuthContext } from "../../contexts/UserContext/AuthContext";
import { ToastContainer } from "react-toastify";
import { BookListRead } from "../../components/BookListRead";
import { Book } from "../../components/Book";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [dados, definirDados] = useState(null);

  const { userData } = useContext(AuthContext);

  const {
    searchFilter,
    setCategoryFilter,
    filterCategoryFunction,
    readBooks,
    read,
    AllBooks,
    library,
    Filter,
  } = useContext(DashContext);

  const { protectRoutes } = useContext(AuthContext);

  interface iResponseLogin {
    accessToken: string;
    user: iUser;
  }
  useEffect(() => {
    AllBooks();
    readBooks();
  }, []);

  interface iUser {
    email: string;
    firstname: string;
    lastname: string;
    age: number;
    id: number;
  }

  useEffect(() => {
    protectRoutes();
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

        <div>
          <p>{userData.name}</p>
          <img className="foto" src={userData.image} alt="Usuario" />
          <img onClick={() => LogoutUser()} src={icone} alt="Icone de logout" />
        </div>
      </StyleHeader>
      <StyleMain>
        <StyleSectionPesq>
          <BookListRead />
          <div>
            <h4>Filtrar por categoria:</h4>
            <ul>
              <button
                onClick={(e) => {
                  Filter(e.currentTarget.innerText);
                }}
              >
                Todos
              </button>
              <button
                onClick={(e) => {
                  Filter(e.currentTarget.innerText);
                }}
              >
                Ação
              </button>
              <button
                onClick={(e) => {
                  Filter(e.currentTarget.innerText);
                }}
              >
                Guerra
              </button>
              <button
                onClick={(e) => {
                  Filter(e.currentTarget.innerText);
                }}
              >
                Deuses
              </button>
              <button
                onClick={(e) => {
                  Filter(e.currentTarget.innerText);
                }}
              >
                Romance
              </button>
              <button
                onClick={(e) => {
                  Filter(e.currentTarget.innerText);
                }}
              >
                Mistério
              </button>
              <button
                onClick={(e) => {
                  Filter(e.currentTarget.innerText);
                }}
              >
                Fantasia
              </button>
              <button
                onClick={(e) => {
                  Filter(e.currentTarget.innerText);
                }}
              >
                Magia
              </button>
              <button
                onClick={(e) => {
                  Filter(e.currentTarget.innerText);
                }}
              >
                Comédia
              </button>
              <button
                onClick={(e) => {
                  Filter(e.currentTarget.innerText);
                }}
              >
                Investigação
              </button>
              <button
                onClick={(e) => {
                  Filter(e.currentTarget.innerText);
                }}
              >
                Religião
              </button>
              <button
                onClick={(e) => {
                  Filter(e.currentTarget.innerText);
                }}
              >
                Luta
              </button>
              <button
                onClick={(e) => {
                  Filter(e.currentTarget.innerText);
                }}
              >
                Mitologia
              </button>
              <button
                onClick={(e) => {
                  Filter(e.currentTarget.innerText);
                }}
              >
                Sexo
              </button>
              <button
                onClick={(e) => {
                  Filter(e.currentTarget.innerText);
                }}
              >
                Aventura
              </button>
              <button
                onClick={(e) => {
                  Filter(e.currentTarget.innerText);
                }}
              >
                Estratégia
              </button>
              <button
                onClick={(e) => {
                  Filter(e.currentTarget.innerText);
                }}
              >
                Terror
              </button>
            </ul>
          </div>
          <form
            className="divPesquisa"
            onSubmit={(event) => {
              event.preventDefault();
              searchFilter(event, ListBooks);
            }}
          >
            <input
              type="text"
              placeholder="Pesquise um livro"
              id="InputSearch"
            />
            <button type="submit">
              <img src={iconeLupa} alt="imagem de uma lupa" />
            </button>
          </form>
        </StyleSectionPesq>

        <section className="sectonBook">
          <Book />
        </section>
      </StyleMain>
      <ToastContainer position="top-center" autoClose={1000} />
    </>
  );
};
