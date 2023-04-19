import React, {useState} from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useFormik } from "formik"
import * as yup from "yup"

function ReviewForm() {
    const history = useHistory()
     const [submittedReview, setSubmittedReview] = useState([])
    const addReview = (review) => setSubmittedReview(current => [...current,review])
    const formSchema = yup.object().shape({
    user: yup.string().required("Must enter a name."),
    text: yup.string().required("Must enter text."),
  })

  const formik = useFormik({
    initialValues: {
      user:'',
      chef_id: '',
      rating:'♡♡♡♡♡',
      text:'',
    },
    validationSchema: formSchema,
    onSubmit: (values, { resetForm, setErrors, setTouched }) => {
  
      fetch("/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }).then((res) => {
        if(res.ok) {
          res.json().then(review => {
            addReview(review)
            history.push("/reviews")
            window.location.reload(); 
          })
        }
      })
    },
  })

    return (
        <div className="reviewform">
          {/* <Form> */}
            <form onSubmit={formik.handleSubmit}>
                <label></label>
                <input type='text' name='user' value={formik.values.user} placeholder="enter your name here..." onChange={formik.handleChange} />
                
                <label className="chef_id">
                    <select
                        name="chef_id"
                        value={formik.values.chef}
                        onChange={formik.handleChange}>
                        <option value="1">Diana</option>
                        <option value="2">Gordon</option>
                        <option value="3">Joon</option>
                        <option value="4">Tony</option>
                        <option value="5">Anika</option>
                    </select>
                </label>

                <label className="rating">
                <select
                    name="rating"
                    value={formik.values.rating}
                    onChange={formik.handleChange}>
                    <option value="♡♡♡♡♡">♡♡♡♡♡</option>
                    <option value="♡♡♡♡">♡♡♡♡</option>
                    <option value="♡♡♡">♡♡♡</option>
                    <option value="♡♡">♡♡</option>
                    <option value="♡">♡</option> 
                </select>
                </label>
            
                <label>What did you think?</label>
                <textarea type='text' rows='4' cols='36' name='text' value={formik.values.text} onChange={formik.handleChange} />
                
                <button type="submit" className="submit">
                Submit
                </button>
            </form>
            {/* </Form>  */}
        </div>
    )
}
export default ReviewForm


styled.form`
background-image: url("https://raw.githubusercontent.com/linjdiana/phase5/main/project%20images/pexels-photo-1131406.webp");
opacity: 0.7;
background-repeat: no-repeat;
background-size: 80%;
height: 500px;
width: 400px;
background-color: rgba(255, 255, 255, 0.2);
display: flex;
flex-direction: column;
align-items: center;
position: sticky;
top: 0;
padding: 1.5rem;
box-shadow: 0 -0.5rem 1rem rgba(0 0 0 / 0.15);
border-radius: 20px;
font-size: 24px;
margin-top: 125px;
}
`