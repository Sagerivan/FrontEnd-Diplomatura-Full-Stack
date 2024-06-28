    import { React, useEffect, useState } from "react";
    import { useNavigate, useParams } from "react-router-dom";
    import Swal from 'sweetalert2';
    import '../App.css';
    
    function EditarEvento() {
        const params = useParams();
        const [tipoEvento, setTipoEvento] = useState('');
        const [descripcion, setDescripcion] = useState('');
        const [fecha, setFecha] = useState('');
        const [horarioInicio, setHorarioInicio] = useState('');
        const [horarioFin, setHorarioFin] = useState('');
        const [capacidad, setCapacidad] = useState('');
        const [organizador, setOrganizador] = useState('');
        const [telefono, setTelefono] = useState('');
        const [precio, setPrecio] = useState('');
        const [abono, setAbono] = useState('');
    
        const navegar = useNavigate();
    
        useEffect(() => {
            const idEvento = params.idevento;
    
            fetch(`http://localhost:5000/events/${idEvento}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            })
            .then(respuesta => respuesta.json())
            .then(res => {
                const dataEvento = res.data[0];
                setTipoEvento(dataEvento.tipo_evento);
                setDescripcion(dataEvento.descripcion);
                setHorarioInicio(dataEvento.hora_inicio);
                setHorarioFin(dataEvento.hora_fin);
                setCapacidad(dataEvento.capacidad);
                setOrganizador(dataEvento.organizador);
                setTelefono(dataEvento.telefono_organizador);
                setPrecio(dataEvento.precio);
                setAbono(dataEvento.estado_abono);
    
                const fechaISO = new Date(dataEvento.fecha);
                const fechaFormateada = fechaISO.toISOString().split('T')[0];
                setFecha(fechaFormateada);
            });
        }, [params.idevento]);
    
        function editarEvento() {
            const idEvento = params.idevento;
            const actualizaEvento = {
                tipo_evento: tipoEvento,
                descripcion: descripcion,
                fecha: fecha,
                hora_inicio: horarioInicio,
                hora_fin: horarioFin,
                capacidad: capacidad,
                organizador: organizador,
                telefono_organizador: telefono,
                precio: precio,
                estado_abono: abono
            };
    
            fetch(`http://localhost:5000/events/${idEvento}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(actualizaEvento)
            })
            .then((res) => {
                if (res.ok) {
                    Swal.fire('Felicidades', 'El evento se editó con éxito');
                    navegar('/');
                } else {
                    alert("Error al editar el evento");
                }
            })
            .catch((error) => {
                console.error("Error en la solicitud:", error);
            });
        }
    
        return (
            <div className="container marginEditarEvento">
                <h2>Editar Evento</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="mb-3">
                            <label htmlFor='tipoEvento' className='form-label'>Tipo de Evento</label>
                            <input type="text" className="form-control" value={tipoEvento} onChange={(e) => { setTipoEvento(e.target.value) }} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="mb-3">
                            <label htmlFor='descripcion' className='form-label'>Descripcion</label>
                            <input type="text" className="form-control" value={descripcion} onChange={(e) => { setDescripcion(e.target.value) }} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="mb-3">
                            <label htmlFor='fecha' className='form-label'>Fecha</label>
                            <input type="date" className="form-control" value={fecha} onChange={(e) => { setFecha(e.target.value) }} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="mb-3">
                            <label htmlFor='horarioInicio' className='form-label'>Horario de Inicio</label>
                            <input type="time" className="form-control" value={horarioInicio} onChange={(e) => { setHorarioInicio(e.target.value) }} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="mb-3">
                            <label htmlFor='horarioFin' className='form-label'>Horario de Finalizacion</label>
                            <input type="time" className="form-control" value={horarioFin} onChange={(e) => { setHorarioFin(e.target.value) }} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="mb-3">
                            <label htmlFor='capacidad' className='form-label'>Capacidad</label>
                            <input type="text" className="form-control" value={capacidad} onChange={(e) => { setCapacidad(e.target.value) }} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="mb-3">
                            <label htmlFor='organizador' className='form-label'>Organizador</label>
                            <input type="text" className="form-control" value={organizador} onChange={(e) => { setOrganizador(e.target.value) }} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="mb-3">
                            <label htmlFor='telefono' className='form-label'>Telefono del Organizador</label>
                            <input type="text" className="form-control" value={telefono} onChange={(e) => { setTelefono(e.target.value) }} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="mb-3">
                            <label htmlFor='precio' className='form-label'>Precio</label>
                            <input type="text" className="form-control" value={precio} onChange={(e) => { setPrecio(e.target.value) }} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="mb-3">
                            <label htmlFor='abono' className='form-label'>Estado del Abono</label>
                            <input type="text" className="form-control" value={abono} onChange={(e) => { setAbono(e.target.value) }} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <button onClick={editarEvento} className="btn btn-warning">Editar Evento</button>
                    </div>
                </div>
            </div>
        );
    }
    
    export default EditarEvento;
    
