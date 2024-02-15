import { getFirestoreApp } from "./db/dbFirebase";
import Excel from "./components/Excel";
import { useState, useEffect } from "react";

getFirestoreApp()
// Function that brings the firebase db to the entire app (do not touch).

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  // Small timeout to give time to the loading screen

  return (
    <div>
      <h1>¡Hola Mundo!</h1>

      {
        loading
        ? <h1>Cargando..</h1>
        : <Excel />
      }
    </div>
  );
}

export default App;