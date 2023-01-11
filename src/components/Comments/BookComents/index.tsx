import React, { useContext, useEffect } from 'react'
import { DashContext } from '../../../contexts/DashboardContext/DashContext'

export const BookComments = () => {
    const { comments, getComments,userInfo } = useContext(DashContext)


    useEffect(() => {
      getComments()
    }, [])

  return (
    <ul>
    {comments.length==0? <div className='containerComent'><h3>Seja o primero a comentar</h3> <span>{':)'}</span></div>:comments.map((element, index) => {
        
        return(

                <li key={index}>
                  <img src={userInfo.image} alt="" />
                    <div className='testeDiv'>
                      <h4>{userInfo.name}</h4>
                      <p>{element.description}</p>
                    </div>
                </li>
        )
    })}
    </ul>
  )
}

