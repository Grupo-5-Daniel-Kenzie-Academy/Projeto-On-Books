import React, { useContext, useEffect } from 'react'
import { DashContext } from '../../../contexts/DashboardContext/DashContext'

export const BookComments = () => {
    const { comments, getComments } = useContext(DashContext)

    useEffect(() => {
      getComments()
    }, [])

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

