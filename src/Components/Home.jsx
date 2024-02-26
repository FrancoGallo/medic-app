import React, { useEffect, useState } from 'react'
import appFirebase from '../Credenciales'

import { getAuth, signOut } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc, Firestore } from 'firebase/firestore'

const auth = getAuth(appFirebase)
const db = getFirestore(appFirebase)
const Home = ({ correoUsuario }) => {
  const valorInicial = {
    nombre: '',
    edad: '',
    peso: ''
  }
  // Variables de estado 
  const [user, setUser] = useState(valorInicial)
  const [lista, setLista] = useState([]) // lista de ususarios // hook useEfect

  // función para capturar datos
  const capturarInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value })
  }

  const guardarDatos = async (e) => {
    e.preventDefault();
    // console.log(user);

    //Logica para hacer la peticion por POST y enviarla a nuestra db
    try {
      await addDoc(collection(db, 'usuarios'), {
        ...user
      })
    } catch (error) {
      console.log(error)

    }

    setUser(valorInicial) //Reestablece valor variable usuario setUser({...valorInicial})
  }

  //funcion es para renderizar la lista de usurios
  useEffect(() => {
    const getLista = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'usuarios'))
        const docs = []
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id })
        })

        setLista(docs)

      } catch (error) {
        // console.log(error)
      }
    }
    getLista()
  }, [lista]) //sin "lista" no renderiza y no actualiza los usuarios nuevos 
  // FIN logica para renderizar la lista de usurios
  return (
    <div className='container'>
      <p>Bienvenido, <strong> {correoUsuario} </strong>Haz Iniciado Sesión</p>
      <button className='btn btn-primary' onClick={() => signOut(auth)}>
        Cerrar Sesión
      </button>
      <hr />

      <div className='row'>
        {/* Esta seccion sera del formulario */}
        <div className="col-md-4">
          <h3 className='text-center mb-3'>Ingresar Usuario</h3>
          <form onSubmit={guardarDatos}>
            <div className='card card-body'>
              <div className='form-group'>

                <input type="text" name='nombre' className='form-control mb-3' placeholder='Ingresar Nombre' onChange={capturarInputs} value={user.nombre} />

                <input type="text" name='edad' className='form-control mb-3' placeholder='Ingresar Edad' onChange={capturarInputs} value={user.edad} />

                <input type="text" name='peso' className='form-control mb-3' placeholder='Ingresar Peso' onChange={capturarInputs} value={user.peso} />
              </div>

              <button className='btn btn-primary'>
                Enviar Formulario
              </button>
            </div>
          </form>
        </div>

        {/* pintar lista de usuarios */}
        {/* Seccion lista usuarios */}
        
        <div className="col-md-4">
          <h2 className='text-center mb-5' >Lista de usuarios</h2>


          <div className='container card'>
            <div className='card-body'>
              {
                lista.map(list => (
                  <div key={list.id}>
                    <p>Nombre: {list.nombre} </p> {/*renderizando */}
                    <p>Nombre: {list.edad} </p>  {/*renderizando */}
                    <p>Nombre: {list.peso} </p> {/*renderizando */}

                    <button className='btn btn-danger'>
                      Eliminar
                    </button>
                    <button className='btn btn-success m-1'>
                      Actualizar
                    </button>
                    <hr />
                  </div>
                ))
              }

            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
export default Home