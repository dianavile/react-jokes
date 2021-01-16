import React from 'react';
import Header from "./components/Header";
import Jokes from "./components/Jokes";
import Background from './assets/joke-background.jpg';
import Temperature from "./components/Temperature";

function App() {
  return (
    <div className="App">
      {/* TODO: 5  ADD WELCOME PAGE ON APP- IN INDEX.JS THEN LOAD COMPONENTS*/}
      {/* TODO: 4 DEBUG BACKGROUND IMG TO APP */}
      <div style={{
        width: "100%",
        height: "50px",  // height: 100, 
        backgroundImage: "url(" + { Background } + ")",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', 
        opacity: 0.9,
        position: 'relative', 
        paddingLeft: 10, 
        fontWeight: 'bold',  
      }}>
     <Temperature/>
        <div style={{
            opacity:1, 
            color: 'black', 
            paddingTop: 40,
            paddingLeft: 50, 
            paddingBottom: 60, 
            paddingRight: 10, 
            position: 'absolute', 
            left: 200,
            top: 60, 
            backgroundColor: 'white',
            borderRadius: '15px',
            marginLeft: 70, 
            marginRight: 10, 
        }}/>
      <Header />
      <Jokes />
      </div>
    </div>
  );
}

export default App;
