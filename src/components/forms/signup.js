import React from 'react';
import axios from 'axios';

const Signup = () => {
    function onSubmit(event) {
        event.preventDefault();
        const registered = {
            fullname: document.getElementById("name").value,
            email:  document.getElementById("email").value,
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
        }
        console.log(registered);
        axios.post('http://localhost:4000/app/signup', registered)
            .then(response => console.log(response.data))
        window.location.assign("http://localhost:3000/home");
    }
    return (
        <div>
            <form onSubmit={(event) => onSubmit(event)} >
                <input type='text'
                    id="name"
                    placeholder='Name'
                />
                <input type='text'
                    id="email"
                    placeholder='E-mail'
                />
                <input type='text'
                    id="username"
                    placeholder='Username'
                />
                <input type='password'
                    id="password"
                    placeholder='Password'
                />
                <input type='submit' value='Submit' />
            </form>
        </div>
    )
}

export default Signup
