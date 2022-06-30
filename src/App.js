import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PersonaComponent } from './components/Persona/PersonaComponent';

export const App = () => {

  const [Personas, setPersonas] = useState([])

  
  const datos = async () => {
    const url = 'http://127.0.0.1:8000/api';
    const response = await axios.get( `${url}/personas`);
    const { data } = await response;
    const { collection } = await data;
    console.log(collection);
    setPersonas(collection);
}

  useEffect(() => {
    datos();
  }, [])


const { data } = Personas;

const { links } = Personas;

if (data === undefined) {
  return <div>Loading...</div>
}
  

  return (
    <div className='container'>
          {
            <div className="table-responsive">
              <table className="table table-hover my-2">
                  <caption>List of users</caption>
                  <thead>
                      <tr>
                      <th scope="col">#</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Apellido</th>
                      <th scope="col">Telefono</th>
                      </tr>
                  </thead>
              {
              data.map(persona => 
                <PersonaComponent key={persona.id} persona={persona}/>
              )
              }
              </table>
            </div>
          }

<nav aria-label="Page navigation example">
  <ul class="pagination">
    {
      links.map(link =>
        <li class="page-item">
          <a class="page-link" href="#" aria-label={link.label}>
            <span aria-hidden="true">{link.label}</span>
          </a>
        </li>
        )
    }
  </ul>
</nav>
    </div>
  );
}