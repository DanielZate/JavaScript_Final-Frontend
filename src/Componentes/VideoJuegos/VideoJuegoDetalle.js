
import axios from "axios";
import React from "react";
import foto from './juego.jpg';

const VideoJuegoDetalle= ( {Video} ) =>{

const borrarVideoJuego =()=>{
  axios.delete(`http://localhost:5000/VideoJuego/${Video._id}`)
  .then(respuesta =>{console.log(respuesta.data)
    window.location.reload()})
  .catch(error => console.log(error))
}

    return (
        <div className="row">
        <div className="col s12 m4">
          <div className="card">
            <div className="card-image"> 
            <img src={foto} />
              <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">Up</i></a>
            
            </div>
            <div className="card-content">
            <span className="card-title">{Video.nombre} </span>

              <p><b>Desarrollador: </b>{Video.Desarrollador}</p>
              <p><b>Genero: </b> {Video.Genero}</p>
              <p><b>Serie:  </b>{Video.Serie}</p>
              <p><b>Fecha de estreno: </b> {Video.fecha_esterno}</p>
<br></br>
                <button onClick={borrarVideoJuego} className="btn waves-effect red darken-1 ">Eliminar</button>
       
            </div>
          </div>
        </div>
      </div>
    )
}

export default VideoJuegoDetalle