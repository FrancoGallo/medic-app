import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';

import appFirebase from './Credenciales';
import { getAuth,onAuthStateChanged } from  "firebase/auth"
const auth = getAuth(appFirebase)
function App() {
  const [user, setUser] = useState(null);
onAuthStateChanged(auth,(usuarioFirebase)=>{
  if (usuarioFirebase) {
    setUser(usuarioFirebase)
  }
  else 
    setUser(null)
})
  return (
    <div>
      {user ? <Home correoUsuario = {user.email} /> : <Login />}

    </div>
  );
}

export default App;
