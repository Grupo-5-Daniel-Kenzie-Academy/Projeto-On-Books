import { useContext } from "react"
import { Link } from "react-router-dom"
import { IoIosLogOut } from "@react-icons/all-files/io/IoIosLogOut"
import { DashContext } from "../../contexts/DashboardContext/DashContext"

export function Description (){

    const {item} = useContext(DashContext)

    return (
        <>
            <header></header>
            <main>teste</main>
        </>
    )
}
