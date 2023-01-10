import { NewComments } from "../../components/Comments/NewComent"
import { Link } from "react-router-dom";
import { IoIosLogOut } from "@react-icons/all-files/io/IoIosLogOut";

export function Description() {
  const item = JSON.parse(localStorage.getItem("book") || "{}");
 
  return (
    <>
      <header>
        <img src="" alt="Logo n Books" />

        <Link to="/dashboard">Início</Link>

        <h3>User name</h3>
        <img src="" alt="img do usuario" />
        <IoIosLogOut />
      </header>

      <main>
        <img src={item.img} alt="livro" />
        <h2>{item.title}</h2>
        {item.categories.map((element: string , index:string) => {
          return <p key={index}>{element}</p>;
        })}
        <h3>{item.description}</h3>
        <button>Já li</button>
        <button>Quero ler</button>
      </main>
      
      <section>
      <NewComments/>
      </section>
    </>
  );
}
