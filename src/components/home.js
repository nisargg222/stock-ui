import React from 'react';
import Cookies from 'js-cookie';

const Home = () => {
    const logout = ()=> {
        Cookies.remove('user');
        window.location.assign("http://localhost:3000/");
      }
    const dashboard = () => {
        window.location.assign("http://localhost:3000/dashboard");
    }

    return (
        <div>
            <h1>Home</h1>
            <button onClick={dashboard}>Dashboard</button>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Home
