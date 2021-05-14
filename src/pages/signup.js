import React, {useState} from 'react'
import style from "../style/signup.module.css"
import axios from "axios"

export default function Login() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmP, setConfirmP] = useState('')


    const handleSubmit=(e)=> {
        e.preventDefault()
        let data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmP: confirmP
        };

        axios.post("http:localhost:8000/register", data)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
        
    }


    return (
        <section className={style.signupContainer}>
            <form onSubmit={handleSubmit}>
                <h2>Sign Up with FreakaZone</h2>
                <div class="form-group">
                    <label>First Name</label>
                    <input type="text" class="form-control" id="firstName"  placeholder="First Name" 
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" id="lastName" placeholder="Last Name" 
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
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
                <div class="form-group">
                    <label>Confirm Password</label>
                    <input type="password" class="form-control" id="cpassword" placeholder="Confirm Password" 
                     onChange={(e) => setConfirmP(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit" class="btn btn-primary btn-lg">Submit</button>
                </div>
                
                
            </form>
        </section>
    )
}
