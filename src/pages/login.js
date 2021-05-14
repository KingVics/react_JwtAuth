import axios from 'axios';
import React, {useState} from 'react'
import { Redirect } from 'react-router';
import style from "../style/signup.module.css"

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleSubmit = (props) => {
        const data = {
            email: email,
            password: password
        }

        axios.post("login", data)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            setIsLoggedIn(true)
            console.log(res);
            props.setUser(res.data.user)
        })
        .catch(err => {
            console.log(err);
        })
    }

    if(isLoggedIn) {
        return <Redirect to={'/'} />
    }
    return (
        <section className={style.signupContainer}>
            <form onSubmit={handleSubmit}>
                <h2>Sign In to FreakaZone</h2>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Email" 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Password" 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit" class="btn btn-primary btn-lg">Sign In</button>
                </div>
                    
                
            </form>
        </section>
    )
}
