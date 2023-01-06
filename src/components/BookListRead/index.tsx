import { useContext } from "react"
import { DashContext } from "../../contexts/DashboardContext/DashContext"
import { BooksRead } from "./Book"
import { StyleUl } from "./style"


export function BookListRead(){
    const { read } = useContext(DashContext)

    return(
        <StyleUl>
           {read && read.map((element) => <BooksRead element={element}/>)}    
        </StyleUl>
    )
}