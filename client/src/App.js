import './App.css';
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from './components/Home.js'
import Authentication from './components/Authentication.js'
import NavBar from './components/NavBar.js'
import ChefsContainer from './components/ChefsContainer'
import CalendarPage from './components/CalendarPage'
import ReviewsContainer from './components/ReviewsContainer'
import RecipesContainer from './components/RecipesContainer'

function App() {
  const [user, setUser] = useState(null);
  const [chefs, setChefs] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [reviews, setReviews ] = useState([])

  const addReview = (review) => setReviews(current => [...current,review])

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

  useEffect(() => {
    fetch("/chefs")
    .then((response) => response.json()) 
    .then((chefData) => {
      setChefs(chefData)
    })
  }, [])

  useEffect(() => {
    fetch("/recipes")
    .then((response) => response.json())
    .then((recipeData) => {
      setRecipes(recipeData)
    })
  }, [])

  useEffect(() => {
    fetch("/reviews")
    .then((response) => response.json())
    .then((reviewData) => {
      setReviews(reviewData)
    })
  }, [])

  const updateUser = (user) => setUser(user)
  if(!user) return (
    <>
    <NavBar />
      <Authentication updateUser={updateUser}/>
    </>
  )
  

  return (
    <div className="App">
      <div className="container">
      <NavBar updateUser={updateUser}/>
      <Switch>
        <Route exact path='/'>
          <Home updateUser={updateUser}/>
        </Route>
        <Route path='/authentication'>
          <Authentication updateUser={updateUser}/>
        </Route>
        <Route path="/chefs">
          <ChefsContainer chefs={chefs}/>
        </Route>
        <Route path="/calendar" >
          <CalendarPage recipes={recipes}/>
        </Route>
        <Route path='/reviews'>
          <ReviewsContainer reviews={reviews} addReview={addReview}/>
        </Route>
        <Route path='/recipes'>
          <RecipesContainer recipes={recipes}/>
        </Route>
        <Route path='/recipes_by_chef/<int:id>'>
          <RecipesContainer />
        </Route>
      </Switch>
      </div>
    </div> 
    )
}

export default App;