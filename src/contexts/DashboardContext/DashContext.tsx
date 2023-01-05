import { useEffect, useState } from "react";
import { createContext } from "react";
import { ReactNode } from "react";
import { IBooks } from "../../testeDB";

export interface IDashProviderProps {
  children: ReactNode;
}
export interface IDashContext {
  searchFilter: (event: any, books: IBooks[]) => void;
  filteredBooks: IBooks[];
}

export const DashContext = createContext<IDashContext>({} as IDashContext);

export function DashProvider({ children }: IDashProviderProps) {
  const [filteredBooks, setFilteredBooks] = useState<IBooks[]>([]);

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
    <DashContext.Provider value={{ searchFilter, filteredBooks }}>
      {children}
    </DashContext.Provider>
  );
}
