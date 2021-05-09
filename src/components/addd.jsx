import React, { Component } from 'react'
import Select from 'react-select';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"


export class Reactsel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            country: []
        }
    }
    componentWillMount() {
        axios.get('http://localhost:4000/app/names').then(response => {
            console.log(response);
            this.setState({
                country: response.data

            })
        })
    }
    Country() {
        return (this.state.country.map(data => ({ label: data.name, value: data.name })))
    }
    render() {
        return (
            <Select options={this.Country()} />
        )
    }
}

export default Reactsel