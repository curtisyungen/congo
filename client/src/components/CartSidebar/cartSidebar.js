import React, { Component } from "react";
import CartSummary from "../CartSummary/cartSummary";
import BookSuggestions from "../BookSuggestions/bookSuggestions";
import "./cartSidebar.css";

class CartSidebar extends Component {
    render() {
        return (
            <div className="cartSidebar">
                {this.props.cart && this.props.cart.length > 0 ? (
                    <CartSummary 
                        user={this.props.user}
                        cart={this.props.cart}
                        subtotal={this.props.subtotal}
                        setRedirectToSignUp={this.props.setRedirectToSignUp}
                    />
                ) : (
                    <></>
                )}

                <BookSuggestions 
                    displayClass="cart"
                    positionClass={`cart-empty-{this.props.cart && this.props.cart.length > 0}`}
                    sendToCart={this.props.sendToCart}
                />
            </div>
        )
    }
}

export default CartSidebar;