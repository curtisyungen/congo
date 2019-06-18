import React, { Component } from "react";
import Container from "../components/Container/container";
import API from "../utils/API";
import "./Success.css";

class Success extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            shippingAddress: "",
        }
    }

    componentDidMount = () => {

        // Get payment info from URL
        let parameters = window.location.href.split("?")[1].split("&");
        let paymentId = parameters[0].split("=")[1];
        let payerId = parameters[2].split("=")[1];

        // Process payment
        API.successfulPayment(paymentId, payerId)
            .then((res) => {
                console.log("Success", res);

                // If payment approved, get shipping address
                if (res.data.state === "approved") {
                    this.setState({
                        shippingAddress: res.data.transactions[0].item_list.shipping_address,
    
                    }, () => {
                        console.log(this.state);
                    });
                }
            });
    }

    render() {
        return (
            <Container>
                <div>
                    {this.state.shippingAddress}
                </div>
            </Container>
        )
    }
}

export default Success;