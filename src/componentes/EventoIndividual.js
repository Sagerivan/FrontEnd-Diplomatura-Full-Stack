import { React } from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

function EventoIndividual({ evento, setHide }) {
  const fechaISO = new Date(evento.fecha);
  const fechaFormateada = fechaISO.toISOString().split('T')[0];
  const navegar = useNavigate();

  function borrarEvento(id) {
    let confirmado = window.confirm("Realmente desea borrar este evento?");

  if(confirmado){
      fetch(`http://localhost:5000/events/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then(res => {
        console.log(res);
        navegar(0);
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
      });
    }

  }

  return (
    <div className="card p-5 marginIndividual">
      <button className="btn btn-danger align-self-end m-1" onClick={() => setHide(true)}>X</button>
      <ul className="list-group">
        <li className="list-group-item  colorCartaIndividual">Tipo de Evento: {evento.tipo_evento}</li>
        <li className="list-group-item  colorCartaIndividual">Descripcion: {evento.descripcion}</li>
        <li className="list-group-item  colorCartaIndividual">Fecha: {fechaFormateada}</li>
        <li className="list-group-item  colorCartaIndividual">Horario de Inicio: {evento.hora_inicio}</li>
        <li className="list-group-item  colorCartaIndividual">Horario de Finalizacion: {evento.hora_fin}</li>
        <li className="list-group-item  colorCartaIndividual">Capacidad: {evento.capacidad} Personas</li>
        <li className="list-group-item  colorCartaIndividual">Organizador: {evento.organizador}</li>
        <li className="list-group-item  colorCartaIndividual">Telefono del Organizador: {evento.telefono_organizador}</li>
        <li className="list-group-item  colorCartaIndividual">Precio: {evento.precio}</li>
        <li className="list-group-item  colorCartaIndividual">Estado del Abono: {evento.estado_abono}</li>
        <li className="list-group-item  colorCartaIndividual">
          <Link to={`/editarevento/${evento.id}`} className="btn btn-warning m-2">Editar</Link>
          <button className="btn btn-danger m-2" onClick={() => borrarEvento(evento.id)}>Borrar</button>
        </li>
      </ul>
    </div>
  );
}

export default EventoIndividual;
    