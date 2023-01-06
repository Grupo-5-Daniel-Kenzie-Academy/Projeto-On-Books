import e from "express";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { ReactNode } from "react";
import { toast } from "react-toastify";
import { api } from "../../api/api";
import { IBooks, ListBooks } from "../../testeDB";

export interface IDashProviderProps {
  children: ReactNode;
}
export interface IDashContext {
  searchFilter: (event: any, books: IBooks[]) => void;
  filteredBooks: IBooks[];
  setCategoryFilter: React.Dispatch<React.SetStateAction<string>>;
  categoryFilter: string;
  categoryBooks: IBooks[];
  filterCategoryFunction: () => void;
  readBooks: () => Promise<void>
}

export const DashContext = createContext<IDashContext>({} as IDashContext);

export function DashProvider({ children }: IDashProviderProps) {
  const token = localStorage.getItem("@Token");
  const id= localStorage.getItem("@id")

  const [filteredBooks, setFilteredBooks] = useState<IBooks[]>([]);

  const [categoryFilter, setCategoryFilter] = useState<string>("todos");

  const [categoryBooks, setCategoryBooks] = useState<IBooks[]>([]);

  const [ read, setRead ] = useState([])
  const [ noRead, setNoRead ] = useState([])

  const [ allReadBook, setAllReadBook ] = useState([])
  const [ noAllReadBook, setNoAllReadBook ] = useState([])

  console.log(allReadBook)

  function filterCategoryFunction() {
    const categoryFilteredBooks = ListBooks.filter((books) => {
      const filterCategories = books.categories.some(
        (category) => categoryFilter === category
      );
      if (filterCategories) {
        return books;
      }
    });
    setCategoryBooks(categoryFilteredBooks);
  }

  function searchFilter(event: any, books: IBooks[]) {
    const valueInput = event.target.querySelector("#InputSearch").value;
    setFilteredBooks(
      books.filter((item) => {
        if (!valueInput) {
          return item;
        } else {
          return item.title.toLowerCase().includes(valueInput.toLowerCase());
        }
      })
    );
  }

  async function readBooks(){
    try{
      const response = await api.get(`/lidos?userId=${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      setRead(response.data)
    } catch{
        console.log('eerro...')
    }
  }

  async function noReadBooks(){
    try{
      const response = await api.get(`/semLer?userId=${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      setNoRead(response.data)
    } catch{
        console.log('eerro...')
    }
  }

  async function AllBooks(){
    try{
      const response = await api.get(`/lidos`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data)
      setAllReadBook(response.data)

    } catch{
        console.log('eerro...')
    }
  }

  async function addReadBooks(element){
    element.userId = Number(id)
    console.log(element.id)
    console.log(allReadBook)
    let objetive = {
      "id": `${allReadBook.length}`,
      "categories": `${element.categories}`,
      "img": `${element.img}`,
      "title": `${element.title}`,
      "userId": `${Number(id)}`
    }    
    const names = read.map((element) => element.title)
    const verification = names.indexOf(element.title)

    if(verification !== -1){
      RemoveReadBooks(element.id * 3)
      return null;
    }

    try{
      const response = await api.post(`/lidos`, objetive,{
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      readBooks()
      AllBooks()
    } catch{
        console.log('eerro')
    }
  }   

  async function addNoReadBooks(element){
    element.userId = Number(id)

    const objetive = {
      "id": `${allReadBook.length}`,
      "categories": `${element.categories}`,
      "img": `${element.img}`,
      "title": `${element.title}`,
      "userId": `${Number(id)}`
    }    
    const names = read.map((element) => element.title)
    const verification = names.indexOf(element.title)

    // if(verification !== -1){
    //   RemoveReadBooks(element.id)
    //   return null;
    // }

    try{
      const response = await api.post(`/semLer`, objetive,{
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      noReadBooks()
      AllBooks()
    } catch{
        console.log('eerro')
    }
  }   

  async function RemoveReadBooks(ids){
    console.log(ids)
    try{
      const response = await api.delete(`/lidos/${ids}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      toast.info("Livro Removido Da Biblioteca dos Lidos 🗑️")
      readBooks()
      AllBooks()
    } catch{
      toast.error("Erro de Requisição, Tente novamente mais tarde")
    }
  }

  async function RemoveNoReadBooks(id){
    console.log(id)
    try{
      const response = await api.delete(`/semLer/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      toast.info("Livro Removido Da Biblioteca dos Lidos 🗑️")
      noReadBooks()
      AllBooks()
    } catch{
      toast.error("Erro de Requisição, Tente novamente mais tarde")
    }
  }

  return (
    <DashContext.Provider
      value={{
        searchFilter,
        filteredBooks,
        setCategoryFilter,
        categoryBooks,
        categoryFilter,
        filterCategoryFunction,
        readBooks,
        addReadBooks,
        read,
        AllBooks
      }}
    >
      {children}
    </DashContext.Provider>
  );
}
