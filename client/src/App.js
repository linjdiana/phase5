import './App.css';
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from './components/Home.js'
import Authentication from './components/Authentication.js'
import NavBar from './components/NavBar.js'
import ChefsContainer from './components/ChefsContainer'
import Calendar from './components/Calendar'
import ReviewsContainer from './components/ReviewsContainer'
import RecipesContainer from './components/RecipesContainer'


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/authorized")
    .then(response => {
      if(response.ok) {
        response.json().then(user =>setUser(user))
      } else {
        setUser(null)
      }
    })
  }, [])

  const updateUser = (user) => setUser(user)
  if(!user) return (
    <>
      <NavBar/>
      <Authentication updateUser={updateUser}/>
    </>
  )

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/authentication'>
          <Authentication/>
        </Route>
        {/* <Route path="/chefs">
          <ChefsContainer/>
        </Route>
        <Route path="/calendar" >
          <Calendar/>
        </Route>
        <Route path='/reviews'>
          <ReviewsContainer/>
        </Route>
        <Route path='/recipes'>
          <RecipesContainer/>
        </Route> */}
      </Switch>
    </div> 
    )
}

export default App;