import React from "react";

const VideoJuegoLista= (props) =>{

    return (
     
      <ul className="collection with-header">
        <li className="collection-header"><h4>VideoJuegos</h4></li>
        
        {
            props.listapersonas.map((elemento)=>{
                return(
                    <li
                     className="collection-item"
                     key={elemento._id}
                     onClick={props.actualizarPersona.bind(this , elemento )}
                     >  
                       
                       {elemento.nombre} </li>
                  
                )
            })
        }
      </ul>        
  
    )
}

export default VideoJuegoLista