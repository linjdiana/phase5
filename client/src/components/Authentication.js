import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useFormik} from "formik"
import * as yup from "yup"
import '../Auth.css'

function Authentication() {
    const [signUp, setSignUp] = useState(false)
    const history = useHistory()

    return (
    <div className="auth">
        <div class="cont">
            <div class="form sign-in">
            <h2>Welcome back!</h2>
            <label>
            <span>Email</span>
            <input type="email" />
            </label>
            <label>
            <span>Password</span>
            <input type="password" />
            </label>
            <p class="forgot-pass">Forgot password?</p>
            <button type="button" class="submit">Sign In</button>
            </div>
        <div class="sub-cont">
            <div class="img">
            <div class="img__text m--up">
            <h2>Ready to join us?</h2>
            <p>Sign up and discover great amount of new opportunities!</p>
        </div>
        <div class="img__text m--in">
            <h2>Have an account?</h2>
            <p>If you already has an account, just sign in. We've missed you!</p>
        </div>
        <div class="img__btn">
            <span class="m--up">Sign Up</span>
            <span class="m--in">Sign In</span>
        </div>
        </div>
        <div class="form sign-up">
            <h2>Time to feel like home,</h2>
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
    </div>
  </div>
</div>

        </div>
    )

}
    

export default Authentication