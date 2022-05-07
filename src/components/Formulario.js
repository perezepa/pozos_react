import { useState, useEffect } from 'react';
import Error from './Error'
import PropTypes from 'prop-types';

const Formulario = ({ pozos, setPozos, pozo, setPozo }) => {
    const [nombre, setNombre] = useState('');
    const [taladro, setTaladro] = useState('');
    const [estimado, setEstimado] = useState('');
    const [real, setReal] = useState('');
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFin, setFechaFin] = useState('');
    const [resumen, setResumen] = useState('');

    const [error, setError] = useState(false)

    useEffect(() => {
        if (Object.keys(pozo).length > 0) {
            setNombre(pozo.nombre)
            setTaladro(pozo.taladro)
            setEstimado(pozo.estimado)
            setReal(pozo.real)
            setFechaInicio(pozo.fechaInicio)
            setFechaFin(pozo.fechaFin)
            setResumen(pozo.resumen)
        }
    }, [pozo])

    const generarId = () => {
        const random = Math.random().toString(36)
        const fecha = Date.now().toString(36)
        //console.log(random + fecha)
        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación del Formulario
        if ([nombre, taladro, estimado, real, fechaInicio, fechaFin, resumen].includes('')) {
            console.log('Hay Al Menos un campo vacio')

            setError(true)
            return;
        }

        setError(false)


        // Objeto de Pozo
        const objetoPozo = {
            nombre,
            taladro,
            estimado,
            real,
            fechaInicio,
            fechaFin,
            resumen
        }

        if (pozo.id) {
            // Editando el Registro
            objetoPozo.id = pozo.id
            const pozosActualizados = pozos.map(pozoState => pozoState.id === pozo.id ? objetoPozo : pozoState)

            setPozos(pozosActualizados)
            setPozo({})

        } else {
            // Nuevo registro
            objetoPozo.id = generarId();
            setPozos([...pozos, objetoPozo]);
        }

        // Reiniciar el form
        setNombre('')
        setTaladro('')
        setEstimado('')
        setReal('')
        setFechaInicio('')
        setFechaFin('')
        setResumen('')

    }

    return (
        <div>
            <form
                onSubmit={handleSubmit}
            >
                {error && <Error><p>Todos los campos son obligatorios</p></Error>}

                <label htmlFor="nombre">
                    Pozo
                </label>
                <input
                    id="nombre"
                    type="text"
                    placeholder="Nombre del Pozo"
                    className="u-full-width"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />

                <label htmlFor="taladro">
                    Taladro
                </label>
                <input
                    id="taladro"
                    type="text"
                    placeholder="Nombre del Taladro"
                    className="u-full-width"
                    value={taladro}
                    onChange={(e) => setTaladro(e.target.value)}
                />

                <label htmlFor="estimado">
                    Tiempo Estimado (Días)
                </label>
                <input
                    id="estimado"
                    type="number"
                    placeholder="Tiempo Estimado"
                    className="u-full-width"
                    value={estimado}
                    onChange={(e) => setEstimado(e.target.value)}
                />

                <label htmlFor="real">
                    Tiempo Estimado (Días)
                </label>
                <input
                    id="real"
                    type="number"
                    placeholder="Tiempo Real"
                    className="u-full-width"
                    value={real}
                    onChange={(e) => setReal(e.target.value)}
                />

                <label htmlFor="registro">
                    Fecha Inicio
                </label>
                <input
                    id="registro"
                    type="date"
                    className="u-full-width"
                    value={fechaInicio}
                    onChange={(e) => setFechaInicio(e.target.value)}
                />

                <label htmlFor="registroFin">
                    Fecha Fin
                </label>
                <input
                    id="registroFin"
                    type="date"
                    className="u-full-width"
                    value={fechaFin}
                    onChange={(e) => setFechaFin(e.target.value)}
                />

                <label htmlFor="resumen">
                    Resumen
                </label>
                <textarea
                    id="resumen"
                    className="u-full-width"
                    placeholder="Resumen del Pozo"
                    value={resumen}
                    onChange={(e) => setResumen(e.target.value)}
                />

                <input
                    type="submit"
                    className="btn_agregar"
                    value={pozo.id ? 'Editar Pozo' : 'Agregar Pozo'}
                />
            </form>
        </div>
    )
}

Formulario.propTypes = {
    pozos: PropTypes.array.isRequired,
    setPozos: PropTypes.func.isRequired,
    pozo: PropTypes.object.isRequired,
    setPozo: PropTypes.func.isRequired
}


export default Formulario
