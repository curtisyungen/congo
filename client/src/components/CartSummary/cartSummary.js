import React, { Component } from "react";
import EnablePopUps from "../EnablePopUps/enablePopUps";
import API from "../../utils/API";
import "./cartSummary.css";

class CartSummary extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: null,
            cart: [],
            subtotal: 0,
        }
    }

    componentDidMount = () => {
        this.setState({
            user: this.props.user,
            cart: this.props.cart,
            subtotal: this.props.subtotal,
        });
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps !== this.props) {
            this.setState({
                user: this.props.user,
                cart: this.props.cart,
                subtotal: this.props.subtotal,
            });
        }
    }

    checkout = () => {
        if (this.props.user !== null) {
            this.checkoutWithPayPal();
        }
        else {
            this.props.setRedirectToSignUp();
        }
    }

    checkoutWithPayPal = () => {

        let total = 0;
        let cart = this.state.cart;

        for (var book in cart) {
            total += cart[book].price;
        }

        localStorage.setItem("total", total);

        API.payUsingPayPal(total)
            .then((res) => {
                let idx;
                for (var link in res.data.links) {
                    if (res.data.links[link].rel === "approval_url") {
                        idx = link;
                    }
                }

                if (idx === null) {
                    alert("Error processing payment.");
                }
                else {
                    window.open(res.data.links[idx].href);
                }                
            });
    }

    render() {
        return (
            <div
                className="cartSummary"
            >

                <EnablePopUps />
                
                <div>
                    <span className="subtotalTitle">Subtotal{this.state.cart ? (` (${this.state.cart.length}) items):`):(":")}</span>
                    <span className="subtotal">&nbsp;{`$${parseFloat(Math.round(this.state.subtotal * 100) / 100).toFixed(2)}`}</span>
                </div>

                <div className="primoDiv">
                    <div className="primoImg"></div>
                    <span className="primoText">&nbsp;FREE Shipping</span>
                </div>

                <button
                    className="checkoutBtn"
                    onClick={(event) => {
                        event.preventDefault();
                    }}
                    disabled
                >
                    Checkout with PayPal
                </button>
                <p className="payPalCaption">Disabled. Book Sale is over. Sorry!</p>
            </div>
        )
    }
}

export default CartSummary;
