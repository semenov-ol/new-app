import React from 'react';
import './App.css';
import Drawer from "./components/drawer/drawer";
import Main from "./components/main/main";


function App() {
  return (
    <div className="App">
        <Main/>

        <Drawer/>
    </div>
  );
}

export default App;
