import React, { useContext } from 'react'
import { DashContext } from '../../contexts/DashboardContext/DashContext'

export function ListBooks (element) {
const { RemoveReadBooks } = useContext(DashContext)

  return (
    <li>
        <img className="imgBook" src={element.img} alt={element.title} />
        <h2>{element.title}</h2>
        <button onClick={() => RemoveReadBooks(element.id) }>Remover</button>
    </li>
  )
}
