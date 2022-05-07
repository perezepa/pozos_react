import Pozo from "./Pozo"
import PropTypes from 'prop-types';

const ListadoPozos = ({ pozos, setPozo, eliminarPozo }) => {
    return (
        <div className="pozo">
            {pozos && pozos.length ? (
                <>
                    <h2>Listado Pozos</h2>
                    <p>
                        Gestión de Pozos {''}
                    </p>
                
                    {pozos.map(pozo => (
                        <Pozo
                            key={pozo.id}
                            pozo={pozo}
                            setPozo={setPozo}
                            eliminarPozo={eliminarPozo}
                        />
                    ))}
                </>

            ) : (
                <>
                    <h2>No hay pozos</h2>
                    <p>
                        Debe agregar pozos {''}
                    </p>
                </>
            )}
        </div>
    )
}

ListadoPozos.propTypes = {
    pozos: PropTypes.array.isRequired,
    setPozo: PropTypes.func.isRequired,
    eliminarPozo: PropTypes.func.isRequired
}

export default ListadoPozos
