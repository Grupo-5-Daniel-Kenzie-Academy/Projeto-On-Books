import { Link, useNavigate } from "react-router-dom";
import { IoIosLogOut } from "@react-icons/all-files/io/IoIosLogOut";
import { StyleHeader, StyleMain, StyleSecComents, StyleSecinpu } from "./style";
import fotoRosto from "../../assets/img/rostinho.jpeg";
import icone from "../../assets/img/logoutIcon.svg";
import logoTitle from "../../assets/img/mewLogo.png";
import { BookComments } from "../../components/Comments/BookComents";
import { NewComments } from "../../components/Comments/NewComent";

export function Description() {
  const item = JSON.parse(localStorage.getItem("book") || "{}");
  
  const navigate = useNavigate();

  function LogoutUser() {
    window.localStorage.clear();
    navigate("/");
  }
 
  return (
    <>
      <StyleHeader>
        <figcaption>
          <img src={logoTitle} alt="imagem de uma logo" />
        </figcaption>

        <Link to={'/dashboard'}>Inicio</Link>

        <div className="infUser">
          <p>Alison Junho</p>
          <img className="foto" src={fotoRosto} alt="Usuario"  />
          <img className="logout" onClick={() => LogoutUser()} src={icone} alt="Icone de logout" />
        </div>
      </StyleHeader>

      <StyleMain>

        <div className="container-infos">
          <img src={item.img} alt="livro" />
              <div className="container-dados">
                        <div className="divInfo">
                          <div className="infor-one">
                            <h2>{item.title}</h2>
                              <div className="divCate">
                                {item.categories.map((element: string , index:string) => {
                                  return <p key={index}>{element}</p>;
                                })}
                              </div>
                          </div>
                          <span>Avaliação dos usuários</span>
                        </div>
                <h3>{item.description}</h3>

                <div className="container-button">
                  <button className="btnLi">Já li</button>
                  <button>Desejo ler</button>
                </div>
              </div>
        </div>

        <StyleSecinpu>
          <NewComments />
        </StyleSecinpu>


        <StyleSecComents>
          <h3>Todos os comentários</h3>
          
          <ul>
            <BookComments />
          </ul>

        </StyleSecComents>



      </StyleMain>

    </>
  );
}
