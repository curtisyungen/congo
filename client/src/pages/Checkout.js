import React, { Component } from "react";
// import Container from "../components/Container/container";
import API from "../utils/API";
import "./Contact.css";

class Checkout extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount = () => {

    }

    checkoutWithPayPal = () => {
        API.payUsingPayPal()
            .then((res) => {
                for (var link in res.links) {
                    if (res.links[link].rel === "approval_url") {
                        console.log(res.links[link]);
                    }
                }
            });
    }

    render() {
        return (
            <div
                className="payPalBtn"
                onClick={this.checkoutWithPayPal}
            >
                Buy
            </div>
        )
    }
}

export default Checkout;