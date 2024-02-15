import { getFirestoreApp } from "./db/dbFirebase";
import Excel from "./components/Excel";

getFirestoreApp()
// Function that brings the firebase db to the entire app (do not touch).

function App() {
  return (
    <div>
      <h1>¡Hola Mundo!</h1>

      <Excel />
    </div>
  );
}

export default App;