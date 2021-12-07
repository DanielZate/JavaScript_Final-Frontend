import React from "react";
import axios from "axios";

class VideoJuegoForm extends React.Component{

    constructor(props){
        super(props)
        this.state =  {
            
        }
    }

    //funcion para enviar request POST a endpoint
    submitNuevaPersona( event ){
        //anular el comportamiento por defecto del formu
        event.preventDefault()
        //peticion con axios
        axios.post('http://localhost:5000/VideoJuego', {
                                                        nombre: this.refs.nombre.value,
                                                        Desarrollador: this.refs.Desarrollador.value,
                                                        Genero: this.refs.Genero.value,
                                                        Serie: this.refs.Serie.value,
                                                        fecha_esterno: this.refs.fecha_esterno.value,
                                                      }
        ).then(respuesta =>{console.log(respuesta.data)
        window.location.reload()})
        .catch(error => console.log(error))
    }

    render(){
        return(
            <div className="row">
            <h4 className="center">Nuevo VideoJuego</h4>
            <form className="col s12" onSubmit={this.submitNuevaPersona.bind(this)}>
            <div className="row">
                <div className="input-field col s6">
                  <input id="nombre" ref="nombre" type="text" />
                  <label htmlFor="nombre">Nombre</label>
                </div>
                </div>


             <div className="row">
                <div className="input-field col s6">
                  <input id="Desarrollador" ref="Desarrollador" type="text" />
                  <label htmlFor="Desarrollador">Desarrollador</label>
                </div>
            

               
                <div className="input-field col s6">
                  <input id="Genero" ref="Genero" type="text" />
                  <label htmlFor="Genero">Genero</label>
                </div>
                </div>
                <div className="row">

                <div className="input-field col s6">
                  <input id="Serie" ref="Serie" type="text" />
                  <label htmlFor="Serie">Serie</label>
                </div>
               

          
                <div className="input-field col s6">
                  <input id="fecha_esterno" ref="fecha_esterno" type="date" />
                  <label htmlFor="fecha_esterno">Fecha de esterno</label>
                </div>
                </div>
                <button type="submit" className="btn waves-effect purple darken-1 " name="action">
                    Guardar
                   
                </button>
            
            </form>
          </div>
        )
    }
}
   

export default VideoJuegoForm