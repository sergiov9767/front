import React from 'react'

export const PersonaComponent = ({persona}) => {
  return (
    
            <tbody>
                <tr>
                <th scope="row">{persona.id}</th>
                <td>{persona.nombre}</td>
                <td>{persona.apellido}</td>
                <td>{persona.cel_phone ? persona.cel_phone : 'Desconocido..'}</td>
                </tr>
            </tbody>
    
  )
}
