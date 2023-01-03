import React from 'react'
import {Link} from "react-router-dom"

export const Dashboard = () => {
  return (
    <div>
    <h1>Login</h1>
    <button>
      <Link to="register">Cadastro</Link>
    </button>
    <button>
      <Link to="login">LoginTeste</Link>
    </button>
  </div>
  )
}
