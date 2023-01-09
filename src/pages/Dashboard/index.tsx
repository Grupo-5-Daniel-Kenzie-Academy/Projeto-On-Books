import logoTitle from "../../assets/img/Logo.svg";
import fotoRosto from "../../assets/img/rostinho.jpeg";
import icone from "../../assets/img/iconeLogout.svg";
import iconeLupa from "../../assets/img/iconeLupa.svg";
import { StyleMain, StyleHeader, StyleSectionPesq } from "./style";
import { ListBooks } from "../../testeDB";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { DashContext } from "../../contexts/DashboardContext/DashContext";
import { AuthContext } from "../../contexts/UserContext/AuthContext";
import { ToastContainer } from "react-toastify";
import { BookListRead } from "../../components/BookListRead";
import { Book } from "../../components/Book";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState("");

  const { readBooks, AllBooks, Filter } =
    useContext(DashContext);

  const { protectRoutes } = useContext(AuthContext);
  const { FilterInput  } = useContext(DashContext);

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

  function FilInput(event: any) {
    event.preventDefault();
   
    FilterInput(value)
  }
  return (
    <>
      <StyleHeader>
        <figcaption>
          <img src={logoTitle} alt="imagem de uma logo" />
        </figcaption>

        <div>
          <p>Usuario</p>
          <img className="foto" src={fotoRosto} alt="Usuario" />
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
                  Filter(e.currentTarget.innerText.toString());
                }}
              >
                Todos
              </button>
              <button
                onClick={(e) => {
                  Filter(e.currentTarget.innerText.toString());
                }}
              >
                Ação
              </button>
              <button
                onClick={(e) => {
                  Filter(e.currentTarget.innerText.toString());
                }}
              >
                Guerra
              </button>
              <button
                onClick={(e) => {
                  Filter(e.currentTarget.innerText.toString());
                }}
              >
                Deuses
              </button>
              <button
                onClick={(e) => {
                  Filter(e.currentTarget.innerText.toString());
                }}
              >
                Romance
              </button>
              <button
                onClick={(e) => {
                  Filter(e.currentTarget.innerText.toString());
                }}
              >
                Mistério
              </button>
              <button
                onClick={(e) => {
                  Filter(e.currentTarget.innerText.toString());
                }}
              >
                Fantasia
              </button>
              <button
                onClick={(e) => {
                  Filter(e.currentTarget.innerText.toString());
                }}
              >
                Magia
              </button>
              <button
                onClick={(e) => {
                  Filter(e.currentTarget.innerText.toString());
                }}
              >
                Comédia
              </button>
              <button
                onClick={(e) => {
                  Filter(e.currentTarget.innerText.toString());
                }}
              >
                Investigação
              </button>
              <button
                onClick={(e) => {
                  Filter(e.currentTarget.innerText.toString());
                }}
              >
                Religião
              </button>
              <button
                onClick={(e) => {
                  Filter(e.currentTarget.innerText.toString());
                }}
              >
                Luta
              </button>
              <button
                onClick={(e) => {
                  Filter(e.currentTarget.innerText.toString());
                }}
              >
                Mitologia
              </button>
              <button
                onClick={(e) => {
                  Filter(e.currentTarget.innerText.toString());
                }}
              >
                Sexo
              </button>
              <button
                onClick={(e) => {
                  Filter(e.currentTarget.innerText.toString());
                }}
              >
                Aventura
              </button>
              <button
                onClick={(e) => {
                  Filter(e.currentTarget.innerText.toString());
                }}
              >
                Estratégia
              </button>
              <button
                onClick={(e) => {
                  Filter(e.currentTarget.innerText.toString());
                }}
              >
                Terror
              </button>
            </ul>
          </div>
          <form className="divPesquisa" onSubmit={(event) => FilInput(event)}>
            <input
              type="text"
              placeholder="Pesquise um livro"
              id="InputSearch"
              onKeyUp={(event)=>{FilterInput(event.currentTarget.value)}}

              onChange={(event) => {
                setValue(event.target.value);
              }
            }
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
