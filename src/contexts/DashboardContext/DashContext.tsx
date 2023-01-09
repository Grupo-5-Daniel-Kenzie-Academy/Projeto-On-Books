import { useContext, useState } from "react";
import { createContext } from "react";
import { ReactNode } from "react";
import { toast } from "react-toastify";
import { string } from "yup";
import { api } from "../../api/api";
import { IBooks } from "../../testeDB";
import { AuthContext, iBookList } from "../UserContext/AuthContext";

export interface IDashProviderProps {
  children: ReactNode;
}

interface iComments {
  author: string,
  titulo: string,
  description: string
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
  FilterInput:(name:string)=>void;

  addComments:(data: iComments) => void;
}

export const DashContext = createContext<IDashContext>({} as IDashContext);

export function DashProvider({ children }: IDashProviderProps) {
  const { bookList, setFilterList } = useContext(AuthContext);

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
    console.log(data)
    try {

      const response = await api.post("/comentarios", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response)

    } catch (error) {
      toast.error("Ops! Algo deu errado");
    } 
  }
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
      }}
    >
      {children}
    </DashContext.Provider>
  );
}
