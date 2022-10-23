import { useState } from 'react'
import {useNavigate} from "react-router-dom"
import './Registration.css'



export default function Registration() {
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [gender, setGender] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()
        console.table(gender)
        

        const response = await fetch('http://localhost:3001/api/auth/registration',
        {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName,
                lastName,
                gender,
                email,
                password
            })
        })

        const data = await response.json()
        console.table(data)
        if(response.ok){
            localStorage.setItem("token", data.token)
            navigate("/auth")
        }

    }

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit} className="form">
                <p>Your name</p>
                <input type="text" placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                <input type="text" placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                <div className="radio-buttons">
                    <div className='radio'>
                        <input type="radio" name="gender" value="male" onChange={(e) => setGender(e.target.value)}/>
                        <label htmlFor="gender">Male</label>
                    </div>
                    <div className='radio'>
                        <input type="radio" name="gender" value="female" onChange={(e) => setGender(e.target.value)}/>
                        <label htmlFor="gender">Female</label>
                    </div>  
                </div>
                
                <p>Login details</p>
                <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='********' onChange={(e) => setPassword(e.target.value)}/>
                <input type="submit" value="Join now" className="btn-submit"/>
                
            </form> 
            <aside>
                <h5>LOYALTY HAS ITS PERKS</h5>
                <p>Get in on the loyalty program where you can earn points and unlock serious perks.</p>
                <p>Starting with these as soon as you join:</p>
                <ul>
                    <li>15% off welcome offer</li>
                    <li>Free shipping, returns and exchanges on all orders</li>
                    <li>$10 off a purchase on your birthday</li>
                    <li>Early access to products</li>
                    <li>Exclusive offers & rewards</li>
                </ul>
            </aside>
        </div>
    )
    
}