import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useFormik} from "formik"
import * as yup from "yup"
import '../Auth.css'

function Authentication({updateUser}) {
    const [isSignup, setIsSignup] = useState(false)
    const history = useHistory()
    const [error, setError] = useState(false)
  
    const handleClick = () => setIsSignup((isSignup) => !isSignup)
    const formSchema = yup.object().shape({
        name: yup.string().required("Please enter a user name"),
        email: yup.string().email(),
        password: yup.string().required("Please enter a password"),
      })

    const formik = useFormik({
        initialValues: {
          name:'',
          email:'',
          password:''
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            fetch(isSignup?'/signup':'/login',{
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            })
            .then(res => {
              if(res.ok){
                res.json().then(user => {
                  // console.log(user)
                  updateUser(user)
                  history.push('/')
                })
              } else {
                //15.2 render the error if the user's authentication fails
                res.json().then(error => setError(error.message))
              }
            })
           
        },
      })


    return (
        <div className="cont">
          <h2 style={{color:'red'}}> {formik.errors.name}</h2>
        {error&& <h2 style={{color:'red'}}> {error}</h2>}
          
            {isSignup ? (
              <form className="s--signup" onSubmit={formik.handleSubmit}>
                <h2>Ready to join us?</h2>
                <label>
                  <span>Name</span>
                  <input type="text" />
                </label>
                <label>
                  <span>Email</span>
                  <input type="email" />
                </label>
                <label>
                  <span>Password</span>
                  <input type="password" />
                </label>
                <button type="submit" className="submit" onClick={handleClick}>
              Sign Up
            </button>
              </form>
            ) : (
              <form className="s--signup" onSubmit={formik.handleSubmit}>
                <h2>Welcome back!</h2>
                <label>
                  <span>Email</span>
                  <input type="email" />
                </label>
                <label>
                  <span>Password</span>
                  <input type="password" />
                </label>
                <button type="submit" className="submit" onClick={handleClick}>
              Log In
            </button>
              </form>
            )}
          
          
  
          <div className="sub-cont">
            <div className="img">
            <div className={`img__text ${isSignup ? "m--up" : "m--up"}`}>
                <h2>{isSignup ? "Ready to join us?" : "Have an account?"}</h2>
                <p>{isSignup ? "Sign up and discover great amount of new opportunities!" : "If you already have an account, just sign in. We've missed you!"}</p>
              </div>
            <div className="img__btn" onClick={handleClick}>
                <span className={`m--up ${!isSignup ? "" : "active"}`}>
          hi there!</span>
              </div>
            </div>
          </div>
        </div>
    );
  }

export default Authentication