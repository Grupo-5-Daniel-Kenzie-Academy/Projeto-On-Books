import e from "express";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { ReactNode } from "react";
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
}

export const DashContext = createContext<IDashContext>({} as IDashContext);

export function DashProvider({ children }: IDashProviderProps) {
  const [filteredBooks, setFilteredBooks] = useState<IBooks[]>([]);

  const [categoryFilter, setCategoryFilter] = useState<string>("todos");

  const [categoryBooks, setCategoryBooks] = useState<IBooks[]>([]);

  function filterCategoryFunction() {
    const categoryFilteredBooks = ListBooks.filter((books) => {
      console.log(categoryBooks);
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

  return (
    <DashContext.Provider
      value={{
        searchFilter,
        filteredBooks,
        setCategoryFilter,
        categoryBooks,
        categoryFilter,
        filterCategoryFunction,
      }}
    >
      {children}
    </DashContext.Provider>
  );
}
