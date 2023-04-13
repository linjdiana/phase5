# Phase 4 Full-Stack Application Project 
Diana Lin

## Introduction
Getting around major cities can be inconvenient, and going out for dinner can be incredibly expensive if you’re drinking with a large group! I’ve created a website (currently beta for San Francisco only) where you can hire personal chefs who live within 5 miles of you for your special event -- all you need to do is pay for their time and for the ingredients. How's a Friday night eating restaurant quality food without having to take an uber and waiting to be seated? This members-only app features five chefs and a page of the dishes they'll be serving for you. 

Please see video demo here: 

This website was created using a React front end along with a Flask backend that utilizes SQLAlchemy for the databases.

## How to access site 
cd server (Flask backend)<br/>
pipenv install<br/>
python app.py<br/><br/>

cd ..<br/>
cd client (React frontend)<br/>
npm install<br/>
npm start<br/>

## Project Navigation
In order to access the site, you first need to sign up for an account, then log in.
You'll reach the home page which is a brief introduction to the website! 
<br/><br/>
Here are the routes: 
/chefs an introduction to the five chefs <br/>
/calendar want to make a booking? take a look at our calendar. we don't have a booking functionality yet but feel free to fill out to "contact us" form. If you're indecisive, you can refresh the page and a chef will randomly be generated for you! <br/>
/recipes a list of some of the most popular recipes our chefs have been using. you can filter based on what you're feeling at the moment. Search filter is by chef name, description, and title.<br/>
/reviews still don't know if you want to book? take a look at our reviews! if you've already had an experience, feel free to post a review of your own.<br/>
/contactus<br/>

## Project Deliverables // models
/authentication you're able to log in and sign up on the website <br />
/chefs each of the five chefs has multiple recipes <br/>
/calendar imported a react-big-calendar to show schedule of availability <br/>
/recipes each recipe has a chef ID associated with it, so you can search the recipes by chef name.<br/>
/reviews reviews are associated with user_id and chef_id. From the backend, one can create, review, update(patch) or delete a review.<br/>
/contactus<br/>

## Future goals: 
- for authentication to include a referral code since the site is only in beta testing mode. This will limit the users to only friends of friends.