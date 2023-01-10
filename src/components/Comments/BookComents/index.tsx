import React, { useContext } from 'react'
import { DashContext } from '../../../contexts/DashboardContext/DashContext'

export const BookComments = () => {
    const { comments } = useContext(DashContext)

  return (
    <>
    {comments.map((element, index) => {
        
        return(

                <li key={index}>
                    <p>{element.author}</p>
                    <p>{element.description}</p>
                </li>
        )
    })}
    </>
  )
}

