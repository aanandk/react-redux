import { useState } from "react";

export default function Form() {

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = e => {
        e.persist();
        console.log(e.target.name, e.target.value)
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.firstName && values.lastName) {

            setSubmitted(true)
        }
    }


    return(
        <div>
            <h1>Form</h1>
            {submitted && <div className="success-message">Success! Thank you for registering...</div>}
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name="firstName"
                id="first-name"
                className="first-name"
                placeholder="First Name"
                value={values.firstName}
                onChange={handleChange}
                />
                {!values.firstName && <span className="error">Please enter the first name</span>}
                <input
                type="text"
                name="lastName"
                id="last-name"
                className="last-name"
                placeholder="Last Name"
                value={values.lastName}
                onChange={handleChange}
                />
                {!values.lastName && <span className="error">Please enter the last name</span>}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}