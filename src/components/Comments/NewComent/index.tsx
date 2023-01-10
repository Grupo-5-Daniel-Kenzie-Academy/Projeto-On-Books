import { useContext } from 'react'
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
    const { register, handleSubmit, reset } = useForm<iCommentsFormValues>();

    
    const onSubmit: SubmitHandler<iCommentsFormValues> = data => { 
        const info = JSON.parse(localStorage.getItem("book") || "{}");
        const user = JSON.parse(localStorage.getItem("user") || "{}")
        const newData = {
            author: user.name,
            titulo: info.title,
            description: data.description,
        }

         
        addComments(newData)  
        reset()
        
    } 


  return (
    <>
        <h2>Comentar:</h2>
    <form className='divTextArea' onSubmit={handleSubmit(onSubmit)}>
        <textarea id="description"  placeholder="Deixe seu comentário... " {...register("description")} />
        <button type="submit">Enviar</button>
    </form>
    </>

  )
}
