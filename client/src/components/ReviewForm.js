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
    rating: yup.number().positive(),
    text: yup.string().required("Must enter text."),
  })

  const formik = useFormik({
    initialValues: {
      user:'',
      rating:'♡♡♡♡♡',
      text:'',
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
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
            history.push(`/reviews`)
            window.location.reload()
          })
        }
      })
    },
  })

  // const handleNameChange = (event) => {
  //   setName(event.target.value);
  // };

    return (
        <div className="reviewform">
          <Form>
            <form onSubmit={formik.handleSubmit}>
                <label></label>
                <input type='text' name='user' value={formik.values.name} placeholder="enter your name here..." onChange={formik.handleChange} />
                
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

                <label className="rating"></label>
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
                
            
                <label>What did you think?</label>
                <textarea type='text' rows='4' cols='36' name='description' value={formik.values.description} onChange={formik.handleChange} />

                <button type="submit" className="submit">
                Submit
                </button>
            </form>
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