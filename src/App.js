import { useState, useEffect } from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPozos from "./components/ListadoPozos"
import Footer from './components/Footer'

function App() {

  const [pozos, setPozos] = useState([]);
  const [pozo, setPozo] = useState({});

  useEffect(() => {
    const obtenerPozos = () => {
      let pozosActualizados = JSON.parse(localStorage.getItem('pozos')) ?? [];
      setPozos(pozosActualizados)
    }
    obtenerPozos();
  }, []);

  useEffect(() => {
    localStorage.setItem('pozos', JSON.stringify( pozos ));
  }, [pozos])

  const eliminarPozo = id => {
    const pozosActualizados = pozos.filter( pozo => pozo.id !== id);
    setPozos(pozosActualizados)
  }

  return (
    <div>
      <Header />

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              pozos={pozos}
              setPozos={setPozos}
              pozo={pozo}
              setPozo={setPozo}
            />
          </div>
          <div className="one-half column">
            <ListadoPozos 
              pozos={pozos}
              setPozo={setPozo}
              eliminarPozo={eliminarPozo}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App;
