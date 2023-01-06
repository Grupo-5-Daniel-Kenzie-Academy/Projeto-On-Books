import { useNavigate } from "react-router-dom";
import logoTitle from "../../assets/img/Logo.svg";
import fotoRosto from "../../assets/img/rostinho.jpeg";
import icone from "../../assets/img/iconeLogout.svg";
import iconeLupa from "../../assets/img/iconeLupa.svg";
import { StyleMain, StyleReader, StyleSectionPesq } from "./style";
import { ListBooks } from "../../testeDB";
import { BookList } from "../../components/BookList";
import { ModalFavorit } from "../../components/ModalFavorit";
import { ModalDescription } from "../../components/ModalDescription";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { DashContext } from "../../contexts/DashboardContext/DashContext";
import { AuthContext } from "../../contexts/UserContext/AuthContext";
import { ToastContainer } from "react-toastify";
import { BookListRead } from "../../components/BookListRead";

export const Dashboard = () => {
  const [favoritModal, setFavoritModal] = useState(false);
  const [descriptionModal, setDescriptionModal] = useState(false);
  const [dados, definirDados] = useState(null);

  const { searchFilter, setCategoryFilter, filterCategoryFunction, readBooks, read, AllBooks, library } =
    useContext(DashContext);

  const { protectRoutes } = useContext(AuthContext);

  interface iResponseLogin {
    accessToken: string;
    user: iUser;
  }
  useEffect(() => {
    AllBooks();
    readBooks();
  }, []);
  console.log(read)

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
        <BookListRead/>
          <div>
            <h4>Filtrar por categoria:</h4>
            <ul>
              <button onClick={() => setCategoryFilter("todos")}>Todos</button>
              <button
                onClick={() => {
                  setCategoryFilter("Ação");
                }}
              >
                Ação
              </button>
              <button
                onClick={() => {
                  setCategoryFilter("Guerra");
                }}
              >
                Guerra
              </button>
              <button onClick={() => setCategoryFilter("Deuses")}>
                Deuses
              </button>
              <button onClick={() => setCategoryFilter("Romance")}>
                Romance
              </button>
              <button onClick={() => setCategoryFilter("Mistério")}>
                Mistério
              </button>
              <button onClick={() => setCategoryFilter("Fantasia")}>
                Fantasia
              </button>
              <button onClick={() => setCategoryFilter("Magia")}>Magia</button>
              <button onClick={() => setCategoryFilter("Comédia")}>
                Comédia
              </button>
              <button onClick={() => setCategoryFilter("Investigação")}>
                Investigação
              </button>
              <button onClick={() => setCategoryFilter("Religião")}>
                Religião
              </button>
              <button onClick={() => setCategoryFilter("Luta")}>Luta</button>
              <button onClick={() => setCategoryFilter("Mitologia")}>
                Mitologia
              </button>
              <button onClick={() => setCategoryFilter("Sexo")}>Sexo</button>
              <button onClick={() => setCategoryFilter("Aventura")}>
                Aventura
              </button>
              <button onClick={() => setCategoryFilter("Estratégia")}>
                Estratégia
              </button>
              <button onClick={() => setCategoryFilter("Terror")}>
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

        <section>
          <BookList ListBooks={ListBooks} />
        </section>
      </StyleMain>
      <button onClick={() => setFavoritModal(true)}>favoritar livro</button>
      {favoritModal ? <ModalFavorit /> : null}

      <button onClick={() => setDescriptionModal(true)}>
        descrição do livro
      </button>
      {descriptionModal ? <ModalDescription /> : null}
      <ToastContainer position="top-center" autoClose={1000} />
    </>
  );
};
