import { Link, useNavigate } from "react-router-dom";
import logoTitle from "../../assets/img/Logo.svg";
import fotoRosto from "../../assets/img/rostinho.jpeg";
import icone from "../../assets/img/iconeLogout.svg";
import iconeLupa from "../../assets/img/iconeLupa.svg";
import { StyleMain, StyleReader, StyleSectionPesq } from "./style";
import { useContext } from "react";
import { ListBooks } from "../../testeDB";
import { BookList } from "../../components/BookList";
import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { DashContext } from "../../contexts/DashboardContext/DashContext";

export const Dashboard = () => {
  const [dados, definirDados] = useState(null);
  const navigate = useNavigate();

  const { searchFilter } = useContext(DashContext);

  interface iResponseLogin {
    accessToken: string;
    user: iUser;
  }

  interface iUser {
    email: string;
    firstname: string;
    lastname: string;
    age: number;
    id: number;
  }

  useEffect(() => {
    async function protejerRotas() {
      const token = localStorage.getItem("@Token");

      if (!token) {
        navigate("/login");
      }

      try {
        const response = await api.get("/livros", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
      } catch {
        navigate("/login");
      }
    }
    protejerRotas();
  });

  return (
    <>
      <StyleReader>
        <figcaption>
          <img src={logoTitle} alt="imagem de uma logo" />
        </figcaption>

        <div>
          <p>Nome do usuario</p>
          <img className="foto" src={fotoRosto} alt="rostinho aleatŕio" />
          <img src={icone} alt="Icone de logout" />
        </div>
      </StyleReader>
      <StyleMain>
        <StyleSectionPesq>
          <div>
            <h4>Filtrar por categoria:</h4>
            <ul>
              <button>Ação</button>
              <button>Guerra</button>
              <button>Deuses</button>
              <button>Romance</button>
              <button>Mistério</button>
              <button>Fantasia</button>
              <button>Magia</button>
              <button>Comédia</button>
              <button>Investigação</button>
              <button>Religião</button>
              <button>Luta</button>
              <button>Mitologia</button>
              <button>Sexo</button>
              <button>Aventura</button>
              <button>Estratégia</button>
              <button>Terror</button>
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

        <section>
          <BookList ListBooks={ListBooks} />
        </section>
      </StyleMain>
    </>
  );
};
