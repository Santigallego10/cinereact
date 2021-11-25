import React from 'react';
import './App.css';
import Movies from './components/Movies';
import ghost from "./assets/ghost.jpg";
import redNotice from "./assets/red.jpg";
import encanto from "./assets/ecanto.jpeg";
import gucci from "./assets/gucci.jpg";

class App extends React.Component{
  
  render(){
    return(
      <div>
      <div className="containerHeader">
        <h1 className="header"> REACT FILMS </h1>
      </div>
      <div className="movies">
      <Movies name="GhostBusters: AFTERLIFE" cover={ghost}/>
      <Movies name="RED NOTICE" cover={redNotice}/>
      <Movies name="ENCANTO" cover={encanto}/>
      <Movies name="HOUSE OF GUCCI" cover={gucci}/>
      </div>
      </div>
    );
  }
}

export default App;
