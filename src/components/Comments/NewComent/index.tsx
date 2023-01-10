import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types/form";
import { DashContext } from '../../../contexts/DashboardContext/DashContext'
import { BookComments } from '../BookComents';

interface iCommentsFormValues {
    author: string,
    titulo: string,
    description: string,
}

export const NewComments = () => {
    const {addComments} = useContext(DashContext)

    const { register, handleSubmit } = useForm<iCommentsFormValues>();

    
    const onSubmit: SubmitHandler<iCommentsFormValues> = data => { 
        const info = JSON.parse(localStorage.getItem("book") || "{}");
        const user = JSON.parse(localStorage.getItem("user") || "{}")
        const newData = {
            author: user.name,
            titulo: info.title,
            description: data.description,
        }
        addComments(newData)
    } 

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Comentar:</h1>
        <input id="description" type="text" placeholder="Deixe seu comentário... " {...register("description")} />
        <button type="submit">Enviar</button>
    </form>

  )
}
