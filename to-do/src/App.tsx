import React from 'react';
import './App.css';
import ToDoBlock from './ToDoBlock/ToDoBlock';
import './open-iconic/font/css/open-iconic-bootstrap.min.css'
import './bootstrap/bootstrap.min.css'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <ToDoBlock coTaskBlockColor="#333" deTaskBlock="New Block" idTaskBlock={0}/>
      </header>
    </div>
  );
}

export default App;
