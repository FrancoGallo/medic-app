// Component that connects to the db to show patient information.

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

// Import that connects to firebase.
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

function Excel() {
  const [data, setData] = useState([])
  const { idTag } = useParams()

  useEffect(() => {
    const dataBase = getFirestore()

    if (idTag) {
      const queryCollection = query(collection(dataBase, 'Prueba'), where('tag', '==', idTag))
      // Put the name of the collection where the collection string is to connect to it.

        getDocs(queryCollection)
          .then((answer) => {
            setData(answer.docs.map(app => ({id: app.id, ...app.data()})))
          })
      } 
      
    else {
      const queryCollection = collection(dataBase, 'Prueba')
            
        getDocs(queryCollection)
          .then((answer) => {
            setData(answer.docs.map(app => ({id: app.id, ...app.data()})))
          })
      }
  }, [idTag])

  return (
    <>
      {data.map((data) => (
        <div>
          <h3>Nombre: {data.name}</h3>
          <h3>Apellido : {data.lastName}</h3> 
        </div>
      ))}
    </>
  )
}

export default Excel