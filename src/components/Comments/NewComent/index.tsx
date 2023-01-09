import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types/form";
import { DashContext } from '../../../contexts/DashboardContext/DashContext'

interface iCommentsFormValues {
    author: string,
    titulo: string,
    description: string,
}

export const NewComments = () => {
    const {addComments} = useContext(DashContext)

    const { handleSubmit } = useForm<iCommentsFormValues>();

    const onSubmit: SubmitHandler<iCommentsFormValues> = data => {
        addComments(data)
    } 

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Comentar:</h1>
        <input id="description" type="text" placeholder="Deixe seu comentário..." />
        <button type="submit">Enviar</button>
    </form>
  )
}
