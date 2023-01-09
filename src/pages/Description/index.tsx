import { useContext } from "react"
import { NewComments } from "../../components/Comments/NewComent"
import { DashContext } from "../../contexts/DashboardContext/DashContext"

export function Description (){

    const {item} = useContext(DashContext)

    return (
        <>
            <header></header>
            <main>teste</main>
            <NewComments/>
        </>
    )
}

