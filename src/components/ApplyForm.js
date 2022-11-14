import axios from 'axios';
import { useState } from 'react'

const formEndpoint = process.env.REACT_APP_WP_API_CONTACT_FORM;

const ApplyForm = () => {
    // collect inputs and store in state
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [household, setHousehold] = useState('')
    const [ownership, setOwnernership] = useState('')
    const [house, setHouse] = useState('')
    const [file, setFile] = useState('')
    // set up state for our contact form
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(null)

    const handleSubmit = () => {
        // process all our data (i.e. the user inputs) into a single object
        const formData = new FormData();
        formData.append('your-name', name)
        formData.append('your-email', email)
        formData.append('contact-number', phone)
        formData.append('household', household)
        formData.append('ownership', ownership)
        formData.append('house', house)
        formData.append('proof', file)

        // post our data to contact form 7, which is in the wordpress backend
        // use axios to do it- first argument is the endpoint, the second argument is the form data,
        // the third argument is the headers, which is telling the server what to expect
        axios.post(formEndpoint, formData, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then((response) => {
            console.log("test");
            console.log(response)
            setSubmitted(true)
        }).catch((error) => {
            console.log(error)
            setError("There was an error! Please try again later!")
        })
    }
    if (submitted) {
        return (
            <>
                <h3>Thank you!</h3>
                <p>Your message was sent. We'll be in touch soon.</p>
            </>
        )
    }
    if (error) {
        return (
            <>
                <h3>Error!</h3>
                <p>Sorry, we were unable to send your message. Please try again later.</p>
            </>
        )
    }
    return (
        <div className="container">
            <form action="action_page.php">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    required
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    required
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
                <label htmlFor="phone">Contact Number</label>
                <input
                    type="text"
                    name="phone"
                    required
                    onChange={(e) => {
                        setPhone(e.target.value)
                    }}
                />

                <p>Does your household have any pets?</p>
                <label htmlFor='household'>Yes</label><input type="checkbox" value="" onChange={(e) => {
                    setHousehold(e.target.value)
                }} />
                <label htmlFor='household'>No</label><input type="checkbox" value="" onChange={(e) => {
                    setHousehold(e.target.value)
                }} />

                <p>Have you owned a cat before?</p>
                <label htmlFor='ownership'>Yes</label><input type="checkbox" value="" onChange={(e) => {
                    setOwnernership(e.target.value)
                }} />
                <label htmlFor='ownership'>No</label><input type="checkbox" value="" onChange={(e) => {
                    setOwnernership(e.target.value)
                }} />

                <p>Do you own the property you live in?</p>
                <label htmlFor='house'>Yes</label><input type="checkbox" value="" onChange={(e) => {
                    setHouse(e.target.value)
                }} />
                <label htmlFor='house'>No</label><input type="checkbox" value="" onChange={(e) => {
                    setHouse(e.target.value)
                }} />
                <br></br>
                <label htmlFor="form">If not, please attach permission from your property manager/landlord to own a cat:</label>
                <input type="file" id="myFile" name="filename" onChange={(e) => {
                    setFile(e.target.value)
                }} />
                <br></br>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ApplyForm