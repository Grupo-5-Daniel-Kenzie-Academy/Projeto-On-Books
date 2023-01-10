import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { ReactNode } from "react";
import { toast } from "react-toastify";
import { api } from "../../api/api";
import { AuthContext, iBookList } from "../UserContext/AuthContext";

export interface IBooks {
  id: number;
  title: string;
  description: string;
  categories: string[];
  img: string;
}

export interface IDashProviderProps {
  children: ReactNode;
}

interface iComments {
  author: string,
  titulo: any,
  description: any
}

export interface iGetComments {
  author: string,
  titulo: string,
  description: string,
  id: number,
}

export interface IDashContext {
  filteredBooks: IBooks[];
  setCategoryFilter: React.Dispatch<React.SetStateAction<string>>;
  categoryFilter: string;
  readBooks: () => Promise<void>;
  addReadBooks: (element: IBooks) => void;
  read: IBooks[];
  AllBooks: () => void;
  library: IBooks[];

  favoritModal: boolean;

  Filter:(name:string) => void;
  item: {},
  setItem:React.Dispatch<React.SetStateAction<iBookList>>

  addComments:(data: iComments) => void;

  getComments: () => void;

  FilterInput:(name:string)=>void;
  
  comments: iGetComments[];

  setComments: React.Dispatch<React.SetStateAction<iGetComments[]>>

  filteredComments: iGetComments[];

  infBook:IBooks,

  setInfBook:React.Dispatch<React.SetStateAction<IBooks>>;

  userInfo: IuserInfo,

  setUserInfo: React.Dispatch<React.SetStateAction<IuserInfo>>
}

export interface IuserInfo{
 
  email: string,
  id: number,
  image: string,
  name: string,
  password: string

} 


export const DashContext = createContext<IDashContext>({} as IDashContext);

export function DashProvider({ children }: IDashProviderProps) {

  const [infBook, setInfBook]= useState<IBooks>({} as IBooks)

  const {bookList, setFilterList} = useContext(AuthContext)

  const token = localStorage.getItem("@Token");

  const id = localStorage.getItem("@id");

  const [filteredBooks, setFilteredBooks] = useState<IBooks[]>([]);

  const [categoryFilter, setCategoryFilter] = useState<string>("todos");

  const [read, setRead] = useState<IBooks[]>([]);

  const [wantRead, setWantRead] = useState<IBooks[]>([]);

  const [allReadBook, setAllReadBook] = useState([]);

  const [library, setLibrary] = useState([]);

  const [favoritModal, setFavoritModal] = useState(false);

  const [item, setItem] = useState<iBookList>({} as iBookList);

  const [comments, setComments] = useState<iGetComments[]>([])

  const [filteredComments, setFilteredComments] = useState<iGetComments[]>([])

  const [userInfo, setUserInfo] = useState<IuserInfo>({} as IuserInfo)

  async function readBooks() {
    try {
      const response = await api.get(`/lidos?userId=${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      setRead(response.data);
    } catch {}
  }

  async function AllBooks() {
    try {
      const response = await api.get(`/lidos`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      setAllReadBook(response.data);
    } catch {}
  }

  async function addReadBooks(element: IBooks) {
    const teste = Math.floor(Math.random() * (10000 - 1 + 1) + 1);
    let objetive = {
      id: `${teste}`,
      categories: `${element.categories}`,
      img: `${element.img}`,
      title: `${element.title}`,
      userId: `${Number(id)}`,
    };
    const names = read.map((element) => element.title);
    const verification = names.indexOf(element.title);

    if (verification !== -1) {
      RemoveReadBooks(element.id);
      return null;
    }

    try {
      const response = await api.post(`/lidos`, objetive, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      readBooks();
      AllBooks();
    } catch {}
  }

  function Filter(name: string) {
    if (name === "Todos") {
      return setFilterList(bookList);
    }

    const goFilter = bookList.filter((element) => {
      const bolena = newIncludes(element.categories, name);
      if (bolena) {
        return element;
      }
    });
    setFilterList(goFilter);
  }
  function FilterInput(name: string) {
    if (name === "") {
      return setFilterList(bookList);
    }

    const goFilter = bookList.filter(
      (element) =>
        element.title.toLowerCase().includes(name.toLowerCase()) ||
        element.alternative.toLowerCase().includes(name.toLowerCase())
    );

    setFilterList(goFilter);
  }

  function newIncludes(arr: [], item: any, startFrom = 0) {
    let res = false;
    for (let i = startFrom; i < arr.length; i++) {
      if (arr[i] == item) {
        return (res = true);
      }
    }
    return res;
  }

  async function RemoveReadBooks(ids: number) {
    try {
      const response = await api.delete(`/lidos/${ids}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      toast.info("Livro Removido Da Biblioteca dos Lidos 🗑️");
      readBooks();
      AllBooks();
    } catch {
      toast("Item Já Adicionado no Seu Carrinho");
      window.scrollTo(0, 0);
    }
  }

  async function addComments(data: iComments){
    
    try {

      const response = await api.post("/comentarios", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      (async function getComments(){
        try {
    
          const response = await api.get("/comentarios");
    
          setComments(response.data)
    
          filterComments(response.data)
    
        } catch (error) {
          toast.error("Ops! Algo deu errado");
        } 
      })()

    } catch (error) {
      toast.error("Ops! Algo deu errado");
    } 
  }

    async function getComments(){
      try {
  
        const response = await api.get("/comentarios");
  
        setComments(response.data)
  
        filterComments(response.data)
  
      } catch (error) {
        toast.error("Ops! Algo deu errado");
      } 
    }

  function filterComments(data: iGetComments[]) {

    const info = JSON.parse(localStorage.getItem("book") || "{}");

    const filterComment = data.filter((element) => element.titulo === info.title)

    setComments(filterComment)

  } 

  useEffect( () => {

    async function userData (){

      try {
    
        const response = await api.get(`/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
        setUserInfo(response.data)

      } catch (error) {

      } 
    }
    userData ()

  }, [token, id])

  

  return (
    <DashContext.Provider
      value={{
        filteredBooks,
        setCategoryFilter,
        categoryFilter,
        readBooks,
        addReadBooks,
        read,
        AllBooks,
        library,
        item,
        setItem,
        Filter,
        favoritModal,
        FilterInput,
        addComments,
        infBook,
        setInfBook,
        getComments,
        comments,
        setComments,
        filteredComments,
        userInfo,
        setUserInfo
      }}
    >
      {children}
    </DashContext.Provider>
  );
}
