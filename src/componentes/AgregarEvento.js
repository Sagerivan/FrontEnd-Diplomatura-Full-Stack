import { React, useState } from "react";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import '../App.css';

function AgregarEvento(){

    
    const[tipoEvento, setTipoEvento]=useState('');
    const[descripcion, setDescripcion]=useState('');
    const[fecha, setFecha]=useState('');
    const[horarioInicio, setHorarioInicio]=useState('');
    const[horarioFin, setHorarioFin]=useState('');
    const[capacidad, setCapacidad]=useState('');
    const[organizador, setOrganizador]=useState('');
    const[telefono, setTelefono]=useState('');
    const[precio, setPrecio]=useState('');
    const[abono, setAbono]=useState('');
    

    const navegar= useNavigate();

    function agregarEvento(){

        const evento = {
            tipoEvento: tipoEvento, 
            descripcion: descripcion,
            fecha: fecha, 
            horarioInicio: horarioInicio, 
            horarioFin: horarioFin,
            capacidad: capacidad, 
            organizador: organizador, 
            telefono: telefono, 
            precio: precio,
            abono: abono    
        }
   
        fetch('http://localhost:5000/events',{

        method:"POST",
        headers: {
         
         "Content-Type": "application/json" 
        },
        
        body:JSON.stringify(evento)

        })
        
        .then((res) => {
            if (res.ok) {
                
                Swal.fire('Felicidades','El usuario se creo con exito');
                
            } else {
                
                alert("Error al crear el usuario");
            }
        })
        .then(()=>{navegar('/');})
        .catch((error) => {
            console.error("Error en la solicitud:", error);
        });
       
      
    }




  


    return(
        <div className="container marginAgregarEvento">
            <div className="row">
               
                    <h2 className="mt-4">Crear un nuevo evento</h2>
                
            </div>

            <div className="row "> 
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
                    <div className="row">
                    <div className="col-12">
                    <button onClick={agregarEvento} className="btn btn-success">Guardar Evento</button>
                    </div>
                    </div>
            </div>
            

        </div>
    
    )}


    export default AgregarEvento;