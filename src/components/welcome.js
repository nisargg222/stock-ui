import React from 'react';

const Welcome = () => {

    const signIn = () => {
        window.location.assign("http://localhost:3000/signin");
    }

    const signUp = () => {
        window.location.assign("http://localhost:3000/signup");
    }

    return (
        <div>
            <h1>Welcome</h1>
            <button onClick={signIn}>Sign In</button>
            <button onClick={signUp}>Sign Up</button>
        </div>
    )
}

export default Welcome
