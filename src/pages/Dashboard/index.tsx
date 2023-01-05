//import { Link } from "react-router-dom";
import logoTitle from "../../assets/img/Logo.svg";
import fotoRosto from "../../assets/img/rostinho.jpeg";
import icone from "../../assets/img/iconeLogout.svg";
import iconeLupa from "../../assets/img/iconeLupa.svg";
import { StyleMain, StyleReader, StyleSectionPesq } from "./style";

import { useState } from "react";

import { ListBooks } from "../../testeDB";
import { BookList } from "../../components/BookList";
import { ModalFavorit } from "../../components/ModalFavorit";
import { ModalDescription } from "../../components/ModalDescription";

export const Dashboard = () => {

  const [favoritModal, setFavoritModal] = useState(false)
  const [descriptionModal, setDescriptionModal] = useState(false)

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
          <div className="divPesquisa">
            <input type="text" placeholder="Pesquise um livro" />
            <img src={iconeLupa} alt="imagem de uma lupa" />
          </div>
        </StyleSectionPesq>

        <section>
          <BookList ListBooks={ListBooks} />
        </section>
      </StyleMain>
      <button onClick={() => setFavoritModal(true)}>favoritar livro</button>
      {favoritModal? <ModalFavorit /> : null}

      <button onClick={() => setDescriptionModal(true)}>descrição do livro</button>
      {descriptionModal? <ModalDescription /> : null}
    </>
  );
};
