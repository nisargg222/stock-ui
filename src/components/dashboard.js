import React, { Component } from "react";
import ReactDOM from "react-dom";
import Cookies from "js-cookie";
import AddStocks from "../components/addStock";
import axios from "axios";
import { Table } from "react-bootstrap";

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myStocks: [],
      username: Cookies.get("user"),
    };
  }
  async componentDidMount() {
    let jsonString = `{"username":"` + this.state.username + `"}`;
    let jsonObject = JSON.parse(jsonString);
    console.log("Conponen", jsonObject);
    await axios
      .post("http://localhost:4000/app/mystocks", jsonObject)
      .then((response) => {
        console.log(response);
        this.setState({
          myStocks: response.data,
        });
      });
  }
  home = () => {
    window.location.assign("http://localhost:3000/home");
  };

  logout = () => {
    Cookies.remove("user");
    window.location.assign("http://localhost:3000/");
  };

  addStocks = () => {
    ReactDOM.render(<AddStocks />, document.getElementById("root"));
  };
  render() {
    return (
      <div style={{ borderWidth: 5, borderColor: "red" }}>
        <h1>Dashboard</h1>
        <button onClick={this.home}>Home</button>
        <button onClick={this.logout}>Logout</button>
        <p />
        <h2 style={{ color: "#4a54f1" }}>
          My Stocks
          <button
            style={{ float: "right", fontSize: "20px" }}
            onClick={this.addStocks}
          >
            Add stocks
          </button>
        </h2>
        {this.state.myStocks.length > 0 && (
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            {this.state.myStocks.map((object) => {
              return (
                <tbody>
                  <tr>
                    <td>{object.symbol}</td>
                    <td>{object.price}</td>
                    <td>{object.quantity}</td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        )}
      </div>
    );
  }
}

export default Welcome;
