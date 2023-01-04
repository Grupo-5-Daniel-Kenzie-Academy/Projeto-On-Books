import React from "react";
import {  useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types/form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { api } from "../../api/api";
import { Input } from "../../components/Input";
import { SlyledDiv } from "./styled";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useState } from "react";
import { Header } from "../../components/Header";
import { LoginSchema } from "../../schema/LoginSchema";
import { yupResolver } from "@hookform/resolvers/yup"
import logo from "../../assets/img/livros.svg"

interface iData{
  email: string,
  password: string
}

interface iLoginUser{
  loginUser: (data: iData) => void
}

export interface iResponseLogin {
  accessToken: string
  user: iUser
}

export interface iUser {
  email: string
  firstname: string
  lastname: string
  age: number
  id: number
}


export function Login (){
  const { register, handleSubmit, formState: {errors} } = useForm<iData>({
    resolver: yupResolver(LoginSchema),
    mode: "onBlur"
  });
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function autoLogin() {
      const token = localStorage.getItem("@Token");

      if (!token) {
        return null;
      }

      try {
        const response = await api.get<iResponseLogin>("/livros", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        // navigate("/dashboard");
      } catch {
        return null;
      }
    }
    autoLogin();
  }, []);

  async function loginUser(data : iData ) {
    console.log(data);

    try {
      const response = await api.post("/login", data);
      toast.success("Usuário Logado! 😎");
      console.log(response);

      const { accessToken, user } = response.data;
      localStorage.setItem("@Token", accessToken);
      setData(user);

      // setTimeout(() => {
      //   navigate("/dashboard");
      // }, 2000);
    } catch {
      toast.error("Email ou senha incorreto! ");
    }
  }

  // function submit (data : SubmitHandler<iData> )  {
  //    loginUser(data)
  // }

  const submit: SubmitHandler<iData> = (data) =>{
    loginUser(data)
  }

  return (
    <SlyledDiv>
      <Header
        route1="/home"
        route2="/register"
        nameRoute1="Home"
        nameRoute2="Register"
      />
      <div className="flex">
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
                />
                {errors.email && <span className="error">{errors.email.message}</span>}
              </div>
              <div className="input">
                <Input
                  label="Senha"
                  type="password"
                  placeholder="Digite sua Senha"
                  register={register}
                  nameError="password"
                />
                {errors.password && <span className="error">{errors.password.message}</span>}
              </div>
              <button className="button">Logar</button>
            </form>
            <span>Ainda não possui cadastro</span>
            <Link className="button" to="/register">
              Cadastrar-se
            </Link>
          </div>
        </div>
      </div>

      <ToastContainer autoClose={1000} />
    </SlyledDiv>
  );
};
