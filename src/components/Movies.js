import React, {Component} from 'react'
import './Movies.css';


export default function Movies(props) {

    const showMovie = ()=>{
    
    }
    
    return (
        <div className="containerMovies">
            <h3 className="nameMovie">{props.name}</h3>
            <img className="picture" src={props.cover}></img>
            <div className="optionsMovie">
              <button  onClick={()=> showMovie()} className="buttonDelete">Eliminar</button>
              <input className="check" type="checkbox"></input>
            </div>
        </div>
    )
}


