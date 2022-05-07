import PropTypes from 'prop-types';

const Pozo = ({pozo, setPozo, eliminarPozo}) => {
    const {nombre, taladro, estimado, real, fechaInicio, fechaFin, resumen, id } = pozo

    const handleEliminar = () => {
        const respuesta = window.confirm('Deseas eliminar este pozo?');

        if(respuesta) {
            eliminarPozo(id)
        }
    }

    return (
        <div className="pozo">
            <p>Pozo: {''}
                <span>{nombre}</span>
            </p>

            <p>Taladro: {''}
                <span>{taladro}</span>
            </p>

            <p>Tiempo Estimado (Días): {''}
                <span>{estimado}</span>
            </p>

            <p>Tiempo Real (Días): {''}
                <span>{real}</span>
            </p>

            <p>Fecha Inicio: {''}
                <span>{fechaInicio}</span>
            </p>

            <p>Fecha Fin: {''}
                <span>{fechaFin}</span>
            </p>

            <p>Resumen: {''}
                <span>{resumen}</span>
            </p>

            <div>
                <button 
                    type="button"
                    className="btn_editar"
                    onClick={() => setPozo(pozo)}
                >Editar</button>

                <button 
                    type="button"
                    className="btn_eliminar"
                    onClick={handleEliminar}
                >Eliminar</button>
            </div>
        </div>
    )
}

Pozo.propTypes = {
    pozo: PropTypes.object.isRequired,
    setPozo: PropTypes.func.isRequired,
    eliminarPozo: PropTypes.func.isRequired
}

export default Pozo
