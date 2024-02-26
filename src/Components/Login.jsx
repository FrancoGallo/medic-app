import React, { useState } from 'react'

import uno from "../images/1.jpg"
import dos from "../images/2.jpg"
import tres from "../images/3.jpg"

import appFirebase from "../Credenciales"
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth"
const auth = getAuth(appFirebase)
function Login() {

  const [registro, setRegistro] = useState(false);

  const handlerSubmit = async(e) =>{
    e.preventDefault()

    const correo = e.target.email.value;
    const contraseña = e.target.contraseña.value;

    if(registro){
      await createUserWithEmailAndPassword(auth, correo, contraseña)
    }
    else{
      await signInWithEmailAndPassword(auth,correo,contraseña)
    }
  }
  return (
    <div className='row container p-4'>
      <div className='col-md-8'>
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={uno} alt="" className='tamaño-imagen' />
            </div>
            <div className="carousel-item">
              <img src={dos} alt="" className='tamaño-imagen' />
            </div>
            <div className="carousel-item">
              <img src={tres} alt="" className='tamaño-imagen' />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="col-md-4">
        <div className='mt-5 ms-5'>
          <h1>{registro ? "Registrate" : "Iniciar sesion"} </h1>
          <form onSubmit={handlerSubmit}>
            <div className='mb-3'>
              <label className='form-label'>Correo electrónico</label>
              <input type="email" className="form-control" placeholder='Correo Electrónico' id='email' required />
            </div>

            <div className='mb-3'>
              <label className='form-label'>Contraseña</label>
              <input type="password" className="form-control" placeholder='Contraseña' id='contraseña' required />
            </div>

            <button className='btn btn-primary' type='submit'>
              {registro ? "Registrate" : "Iniciar sesion"}
            </button>
          </form>
          <div className='form-group'>
            <button className='btn btn-secondary mt-4 form-control' onClick={() => setRegistro(!registro)}>{registro ? "Ya tienes cuenta ? Inicia Sesión" : "No tienes cuenta ? Registrate"}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login