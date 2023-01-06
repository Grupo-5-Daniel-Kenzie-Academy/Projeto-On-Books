import { Header } from "../../components/Header";
import { StyledRegisterPage } from "./styles";
import bgImg from "../../assets/img/livros-hp.png";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../schema/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext/AuthContext";
/* import { toast } from "react-toastify"; */

interface iRegisterData {
  name: string;
  email: string;
  image: string;
  password: string;
  confirmed_password?: string;
}

export const Register = () => {
  const { userRegister } = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iRegisterData>({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  function submit(data: iRegisterData) {
    delete data.confirmed_password;
    userRegister(data);
    reset();
  }

  return (
    <>
      <Header route1="/" route2="/login" nameRoute1="Home" nameRoute2="Login" />
      <StyledRegisterPage>
        <div className="registerContainer">
          <form className="registerForm" onSubmit={handleSubmit(submit)}>
            <h2>Cadastrar</h2>
            <Input
              label="Nome"
              nameError="name"
              placeholder="Digite seu nome aqui"
              register={register}
              type="text"
              msgerror={errors.name?.message}
            />
            <Input
              label="E-mail"
              nameError="email"
              placeholder="Digite seu email aqui"
              register={register}
              type="email"
              msgerror={errors.email?.message}
            />
            <Input
              label="Imagem"
              nameError="image"
              placeholder="Adicione um avatar"
              register={register}
              type="text"
              msgerror={errors.image?.message}
            />
            <Input
              label="Senha"
              nameError="password"
              placeholder="Digite sua senha aqui"
              register={register}
              type="password"
              msgerror={errors.password?.message}
            />
            <Input
              label="Confirmar senha"
              nameError="confirmed_password"
              placeholder="Digite sua senha novamente"
              register={register}
              type="password"
              msgerror={errors.confirmed_password?.message}
            />
            <button type="submit">Cadastrar</button>
          </form>
        </div>
        <img src={bgImg} alt="books" className="registerImg" />
      </StyledRegisterPage>
    </>
  );
};