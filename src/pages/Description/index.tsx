import { Link } from "react-router-dom"
import { IoIosLogOut } from "@react-icons/all-files/io/IoIosLogOut"

export function Description (){
    
    const item = JSON.parse(localStorage.getItem("book")) || {}
    console.log(item)

    return (
        <>
            <header>

                <img src="" alt="Logo n Books" />

                <Link to="/dashboard" >Início</Link>
                
                <h3>User name</h3>
                <img src="" alt="img do usuario" />
                <IoIosLogOut/>

            </header>

            <main>
                <img src={item.img} alt="livro" />
                <h2>{item.title}</h2>
                {
                    item.categories.map(element =>{
                        return <p>{element}</p>
                    })
                }
                <h3>{item.description}</h3>
                <button>Já li</button>
                <button>Quero ler</button>

            </main>
            <section>
                <h2>Comentar:</h2>

                <textarea name="" id="" cols="30" rows="10" placeholder="Deixe seu comentario" value="">
                </textarea>
                <button>Enviar</button>

            </section>
            <footer>
                <h3>Todos os comentários</h3>
                <ul>
                    <li>
                        <img src="" alt="imagem do usuario" />
                        <h4>nome do usuário</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellat sequi sed, delectus, nemo in minima distinctio ratione velit reiciendis id laboriosam! Nam voluptatum explicabo ipsa reiciendis, odio fugiat a!</p>
                    </li>
                </ul>

            </footer>
        </>
    )
}
