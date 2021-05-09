import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Select from "react-select"
import axios from 'axios'
import Cookies from 'js-cookie'


class AddStocks extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stocks: [],
            username: Cookies.get('user'),
            symbol: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
    }
    componentWillMount() {
        axios.get('http://localhost:4000/app/stocks').then(response => {
            console.log(response);
            this.setState({
                stocks: response.data
            })
        })
    }
    changeSymbol= (selectedOption) => {
        this.setState({ 
            symbol:selectedOption 
        });
        console.log(this.state)
      }
    Stocks() {
        return (this.state.stocks.map(data => ({ label: data.name, value: data.symbol })))
    }
    onSubmit(event) {
        event.preventDefault();
        const userStock = {
            username: Cookies.get('user'),
            symbol: this.state.symbol.value,
            quantity: document.getElementById("purchaseQuantity").value,
            price: document.getElementById("purchasePrice").value,
            date: document.getElementById("purchaseDate").value
        }
        console.log(userStock);
        axios.post('http://localhost:4000/app/addstock', userStock)
            .then(response => console.log(response.data))
        window.location.assign("http://localhost:3000/dashboard");
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div style={{ maxWidth: 250 }}>
                    <h6>Stock Name
                        <Select
                            id="symbol"
                            onChange={this.changeSymbol}
                            options={this.Stocks()}
                        />
                    </h6>
                </div>
            <h6>Date of purchase:&emsp;
                <input type="date" id="purchaseDate" name="purchaseDate" />
            </h6>
            <h6>Price of purchase:&emsp;
                <input type="number" id="purchasePrice" name="purchasePrice"  min="0" step="0.05"/>
            </h6>
            <h6>Quantity:&emsp;
                <input type="number" id="purchaseQuantity" name="purchaseQuantity" min="0" step="1"/>
            </h6>
            <input type='submit' value='Submit' />                
            </form>
        )
    }
}

export default AddStocks;