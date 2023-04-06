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
  const [chefs, setChefs] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [ reviews, setReviews ] = useState([])

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

  // useEffect(() => {
  //   fetch("/chefs")
  //   .then((response) => response.json()) 
  //   .then((chefData) => {
  //     setChefs(chefData)
  //   })
  // }, [])

  // useEffect(() => {
  //   fetch("/recipes")
  //   .then((response) => response.json())
  //   .then((recipeData) => {
  //     setRecipes(recipeData)
  //   })
  // }, [])

  // useEffect(() => {
  //   fetch("/reviews")
  //   .then((response) => response.json())
  //   .then((reviewData) => {
  //     setReviews(reviewData)
  //   })
  // }, [])


  const updateUser = (user) => setUser(user)
  if(!user) return (
    <>
    <NavBar />
      <Authentication updateUser={updateUser}/>
    </>
  )

  return (
    <div className="App">
      <NavBar updateUser={updateUser}/>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/authentication'>
          <Authentication updateUser={updateUser}/>
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