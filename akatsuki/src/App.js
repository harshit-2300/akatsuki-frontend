import React from 'react';
import './App.css';
import SwipeableTemporaryDrawer from './components/Drawer';
import InteractiveList from './components/List';
import Chips from './components/Chip';
import { TextField } from '@material-ui/core';
function App() {
  const [page, setPage] = React.useState("scheduled");
  
  if(page=="scheduled")
  {
  return (
    <div className="App">
      <header className="App-header">
    
          Learn React
        <SwipeableTemporaryDrawer pag="setPage" /> 
        <InteractiveList /> 
        <Chips />
        <Chips />
        <TextField />
      </header>
    </div>
  );
  }
  else
  {
    return (
      <div className="App">
        <header className="App-header">
      
           Not Learn React
          <SwipeableTemporaryDrawer /> 
          <InteractiveList />
          <Chips /> 

        </header>
      </div>
    );
  }
}

export default App;
