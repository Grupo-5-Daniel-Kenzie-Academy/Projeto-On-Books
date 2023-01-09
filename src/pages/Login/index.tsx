import { useContext } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types/form";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Input } from "../../components/Input";
import { SlyledDiv } from "./styled";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

import { Header } from "../../components/Header";

import { yupResolver } from "@hookform/resolvers/yup";
import logo from "../../assets/img/livros.svg";
import { AuthContext } from "../../contexts/UserContext/AuthContext";
import { LoginSchema } from "../../schema/schema";

interface iData {
  email: string;
  password: string;
}

export interface iResponseLogin {
  accessToken: string;
  user: iUser;
}

export interface iUser {
  email: string;
  firstname: string;
  lastname: string;
  age: number;
  id: number;
}

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iData>({
    resolver: yupResolver(LoginSchema),
    mode: "onBlur",
  });
  const { loginUser, autoLogin } = useContext(AuthContext);

  useEffect(() => {
    autoLogin();
  }, []);

  const submit: SubmitHandler<iData> = (data) => {
    loginUser(data);
  };

  return (
    <SlyledDiv>
      <Header
        route1="/"
        route2="/register"
        nameRoute1="Home"
        nameRoute2="Cadastrar"
      />
      <main className="flex">
        <img className="image" src={logo} />
        <div className="divBackground">
          <div className="divForm">
            <h1>Login</h1>
            <form onSubmit={handleSubmit(submit)}>
              <div className="input">
                <Input
                  label="Email"
                  type="email"
                  placeholder="Digite seu Email"
                  register={register}
                  nameError="email"
                  msgerror={errors.email?.message}
                />
              </div>
              <div className="input">
                <Input
                  label="Senha"
                  type="password"
                  placeholder="Digite sua Senha"
                  register={register}
                  nameError="password"
                  msgerror={errors.password?.message}
                />
              </div>
              <button className="button">Logar</button>
            </form>
            <span className="messageRegister">Ainda não possui cadastro</span>
            <Link className="registerButton" to="/register">
              Cadastrar-se
            </Link>
          </div>
        </div>
      </main>

      <ToastContainer autoClose={1000} />
    </SlyledDiv>
  );
}
