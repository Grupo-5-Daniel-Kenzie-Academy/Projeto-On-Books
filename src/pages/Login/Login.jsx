import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <button>
        <Link to="register">Cadastro</Link>
      </button>
      <button>
        <Link to="dashboard">Home</Link>
      </button>
    </div>
  );
};
