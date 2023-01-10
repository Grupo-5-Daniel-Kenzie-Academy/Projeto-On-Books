import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types/form";
import { DashContext } from '../../../contexts/DashboardContext/DashContext'
import { BookComments } from '../BookComents';
import { api } from "../../../api/api";
import { toast } from "react-toastify";

interface iCommentsFormValues {
    author: string,
    titulo: string,
    description: string,
}

interface iComments {
    author: string,
    titulo: string,
    description: string,
}

export const NewComments = () => {
    const {addComments} = useContext(DashContext)

    const token = localStorage.getItem("@Token");

    const { register, handleSubmit } = useForm<iCommentsFormValues>();


    // async function addComments(data: iComments){
    
    //     try {
    
    //       const response = await api.post("/comentarios", data, {
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //         },
    //       });
    
    //     } catch (error) {
    //       toast.error("Ops! Algo deu errado");
    //     } 

    // }
    
    const onSubmit: SubmitHandler<iCommentsFormValues> = data => { 
        const info = JSON.parse(localStorage.getItem("book") || "{}");
        const user = JSON.parse(localStorage.getItem("user") || "{}")
        const newData = {
            author: user.name,
            titulo: info.title,
            description: data.description,
        }
        addComments(newData)
        return newData
    } 

    const data = onSubmit

    console.log(data)

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Comentar:</h1>
        <input id="description" type="text" placeholder="Deixe seu comentário... " {...register("description")} />
        <button type="submit">Enviar</button>
    </form>

  )
}
