import React, { useState } from 'react'
import {Link} from "react-router-dom"
import { ModalDescription } from '../../components/ModalDescription'
import { ModalFavorit } from '../../components/ModalFavorit'

export const Dashboard = () => {

  const [favoritModal, setFavoritModal] = useState(false)
  const [descriptionModal, setDescriptionModal] = useState(false)

  return (
    <div>
      <h1>Login</h1>
      <button>
        <Link to="register">Cadastro</Link>
      </button>
      <button>
        <Link to="login">LoginTeste</Link>
      </button>

      <button onClick={() => setFavoritModal(true)}>favoritar livro</button>
      {favoritModal? <ModalFavorit /> : null}

      <button onClick={() => setDescriptionModal(true)}>descrição do livro</button>
      {descriptionModal? <ModalDescription /> : null}

    </div>
  )
}
