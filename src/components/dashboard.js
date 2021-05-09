import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie';
import AddStocks from "../components/addStock";

const Welcome = () => {

    const home = () => {
        window.location.assign("http://localhost:3000/home");
    }

    const logout = () => {
        Cookies.remove('user');
        window.location.assign("http://localhost:3000/");
    }

    const addStocks = () => {
        ReactDOM.render(<AddStocks />, document.getElementById('root'))
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={home}>Home</button>
            <button onClick={logout}>Logout</button>
            <p />
            <h2 style={{ color: "#4a54f1" }}>My Stocks
            <button style={{ float: "right", fontSize: "20px" }} onClick={addStocks}>Add stocks</button>
            </h2>
        </div>
    )
}

export default Welcome
