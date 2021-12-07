import React from "react";
import VideoJuegoDetalle from "./VideoJuegos/VideoJuegoDetalle";
import VideoJuegoForm from "./VideoJuegos/VideoJuegoForm";
import VideoJuegoLista from "./VideoJuegos/VideoJuegoLista";
import axios from "axios";

class App extends React.Component{

  constructor(props){
    super(props)
    this.state ={
      personas : [],
      personaActual :  {}
    }

    //vincular la funcion actualizarPersona al objeto
    this.actualizarPersona = this.actualizarPersona.bind(this)
  }

  componentDidMount(){
      const url = "http://localhost:5000/VideoJuego"
      axios.get(url)
      .then((respuesta)=>{
        this.setState({
          personas: respuesta.data
        })
      })
      .catch((error) =>{console.log(error)})
  }

  //function para asignar la persona actual
  actualizarPersona(persona){
    this.setState({
      personaActual : persona
    })
  }

  render(){
    return (
    <div className="container-fluid">
      <div className="row">
          <div className="col s12">
          <nav>
    <div class="nav-wrapper purple darken-1">
      <a href="#" class="brand-logo">VideoJuegos</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down purple darken-1">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
          </div>
      </div>
      <div className="row">
          <div className="col s3">
          <VideoJuegoLista  
                            listapersonas={ this.state.personas } 
                            actualizarPersona = {this.actualizarPersona}
          />
          </div>
          <div className="col s9">
          <VideoJuegoDetalle Video={this.state.personaActual}/>
          </div>
      </div>
      <div className="row">
          <div className="col s12">
          <VideoJuegoForm />
          </div>
      </div>
    </div>
  );
  }
}


export default App;
