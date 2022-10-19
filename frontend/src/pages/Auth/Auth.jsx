import './Auth.css'
import { useState } from 'react';
import {useNavigate} from "react-router-dom"


export default function Auth() {
    const navigate = useNavigate()
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:3001/api/auth/login', {
            method: 'post',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({email, password})
        })
        const data = response.json()
        if(response.ok){
            localStorage.setItem("token", data.token)
            navigate('/profile')
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input type="email" name="email" placeholder='enter your email' onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='*******' onChange={(e) => setPassword(e.target.value)}/>
                <input type="submit" value="Submit" />
            </form>
        </>
    );
};

