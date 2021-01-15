import React from 'react';
import Header from "./components/Header";
import Jokes from "./components/Jokes";
import Background from './assets/joke-background.jpg';

function App() {
  return (
    <div className="App">
      {/* TODO: 5  ADD WELCOME PAGE ON APP- IN INDEX.JS THEN LOAD COMPONENTS*/}
      {/* TODO: 4 DEBUG BACKGROUND IMG TO APP */}
      <div style={{
        width: "100%",
        height: "400px",  // height: 100, 
        backgroundImage: "url(" + { Background } + ")",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', 
        opacity: 0.5,
        position: 'relative', 
        paddingLeft: 10, 
        fontWeight: 'bold',  
      }}>
      {/* TODO: 5 ADD TEMPERATURE TO APP */}
      <Header />
      <Jokes />
      </div>
    </div>
  );
}

export default App;
