import { useContext } from "react"
import { Ranking } from "../../components/Ranking"
import { DashContext } from "../../contexts/DashboardContext/DashContext"

export function Description (){

    const {item} = useContext(DashContext)

    return (
        <>
            <header></header>
            <main>teste</main>
            <Ranking/>
        </>
    )
}

