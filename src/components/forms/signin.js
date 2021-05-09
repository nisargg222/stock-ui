import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const Signin = () => {
    function onSubmit(event) {
        event.preventDefault();
        const registered = {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
        }
        console.log(registered);
        axios.post('http://localhost:4000/app/signin', registered)
            .then(res => {
                console.log(res);
                if (res.data === 'Success') {
                    Cookies.set('user', registered.username);
                }
                window.location.assign("http://localhost:3000/home");
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <form onSubmit={(event) => onSubmit(event)} >
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

export default Signin
