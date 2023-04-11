import React, {useState} from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useFormik } from "formik"
import * as yup from "yup"

function ReviewForm({addReview}) {
    const history = useHistory()
    const formSchema = yup.object().shape({
    user: yup.string().required("Must enter a name."),
    rating: yup.number().positive(),
    text: yup.string().required("Must enter text."),
  })

  const formik = useFormik({
    initialValues: {
      user:'',
      rating:'',
      text:'',
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      fetch("/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values, null, 2),
      }).then((res) => {
        if(res.ok) {
          res.json().then(review => {
            addReview(review)
            history.push(`/reviews`)
            window.location.reload()
          })
        }
      })
    },
  })

    return (
        <div className="reviewform">
            <Form onSubmit={formik.handleSubmit}>
                <label></label>
                <input type='text' name='name' value={formik.values.name} placeholder="enter your name here..." onChange={formik.handleChange} />
                
                <label className="chef">
                    <select
                        name="rating"
                        value={formik.values.workout}
                        onChange={formik.handleChange}>
                        <option value="Diana">Diana</option>
                        <option value="Gordon">Gordon</option>
                        <option value="Joon">Joon</option>
                        <option value="Tony">Tony</option>
                        <option value="Anika">Anika</option>
                    </select>
                </label>

                <label className="rating">
                <select
                    name="rating"
                    value={formik.values.chef}
                    onChange={formik.handleChange}>
                    <option value="♡♡♡♡♡">♡♡♡♡♡</option>
                    <option value="♡♡♡♡">♡♡♡♡</option>
                    <option value="♡♡♡">♡♡♡</option>
                    <option value="♡♡">♡♡</option>
                    <option value="♡">♡</option> 
                </select>
                </label>
            
                <label>What did you think?</label>
                <textarea type='text' rows='3' cols='40' name='description' value={formik.values.description} onChange={formik.handleChange} />

                <button type="submit" className="submit">
                Submit
                </button>
            </Form> 
        </div>
    )
}
export default ReviewForm


const Form = styled.form`
margin-top: 22px;
background-image: url("https://raw.githubusercontent.com/linjdiana/phase5/main/project%20images/pexels-photo-1131406.webp");
opacity: 0.7;
background-repeat: no-repeat;
background-size: 125%;
height: 380px;
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
}
`