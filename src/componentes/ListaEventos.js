import { React, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import EventoIndividual from "./EventoIndividual";
import '../App.css';

function ListaEventos() {
  const [eventos, setEventos] = useState([]);
  const [eventoId, setEventoId] = useState(null);

  const mostrar = (id) => {
    setEventoId(id);
  }

  useEffect(() => {
    fetch('http://localhost:5000/events', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(respuesta => respuesta.json())
    .then((datosRespuesta) => {
      setEventos(datosRespuesta.data);
    })
    .catch(console.log);
  }, []);

  const eventoSeleccionado = eventos.find(evento => evento.id === eventoId);

  return (
    <div className="d-flex">
      <div className="col-4 p-3">
        <h2 className="text-center text-white mt-5">Eventos</h2>
        <div className="">
          {eventos.map((evento, index) => (
            <div key={index} className="card p-2 mb-2">
              <span>Evento: </span>{evento.tipo_evento}. <span>Organizador: </span>{evento.organizador}
              <button className="btn btn-info align-self-end more p-2 m-2" onClick={() => mostrar(evento.id)}>Mostrar más</button>
            </div>
          ))}
        </div>
      </div>
      
      <div className="col-8 p-3">
        {eventoSeleccionado && (<EventoIndividual evento={eventoSeleccionado} setHide={() => setEventoId(null)} /> )}
      </div>
    </div>
  );
}

export default ListaEventos;
