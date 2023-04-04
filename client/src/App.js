import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from './components/Home.js'
import './App.css';

function App() {
  return (
    <>
      <h1>app component</h1>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;