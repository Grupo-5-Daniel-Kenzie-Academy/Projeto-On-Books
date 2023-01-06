import { element } from "prop-types";
import { useEffect } from "react";
import { createContext } from "react";
import { ReactNode } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../api/api";
import { iResponseLogin } from "../../pages/Login";

export interface IAuthProviderProps {
  children: ReactNode;
}

interface iData {
  email: string;
  password: string;
}

interface iResponseData {
  accessToken: string;
  user: {
    email: string;
    name: string;
    id: string;
  };
}

interface iRegisterData {
  name: string;
  email: string;
  image: string;
  password: string;
  confirmed_password?: string;
}

export const AuthContext = createContext({});

export function AuthProvider({ children }: IAuthProviderProps) {
  const navigate = useNavigate();

  async function loginUser(data: iData) {

    try {
      const response = await api.post("/login", data);
      toast.success("Usuário Logado! 😎");

      const { accessToken, user } = response.data;
      localStorage.setItem("@Token", accessToken);
      localStorage.setItem("@id",user.id)

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch {
      toast.error("Email ou senha incorreto! ");
    }
  }

  async function userRegister(formData: iRegisterData) {
    try {
      await api.post<iResponseData>("/users", formData);

      toast.success("Cadastro realizado com sucesso!", {
        autoClose: 3000,
      });

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      toast.error("Oops, algo deu errado...");
    }
  }

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
      navigate("/dashboard");
    } catch {
      return null;
    }
  }

  async function protectRoutes() {
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

  return (
    <AuthContext.Provider value={{ loginUser, userRegister, autoLogin, protectRoutes }}>
      {children}
    </AuthContext.Provider>
  );
}
