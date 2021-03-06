import React, { Component } from "react";
import "./Login.css";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        }
    }

    componentDidMount = () => {
        if (window.location.protocol !== 'https:') {
            window.location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
        }
    }

    validateForm = () => {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.loginUser(this.state.email, this.state.password);
    }

    render() {
        return (
            <span className="loginPage">
                <a className="congoLogo" href="/">
                    <img className="loginLogo" src={require('../images/congo1.png')} alt="congo" />
                </a>

                <div className="login">
                    <form>
                        <h4 className="formHeader">Sign in</h4>
                        <p className="formLabel">Email</p>
                        <input
                            autoFocus
                            className="formInput emailInput"
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            autoComplete="off"
                        />

                        <span className="formLabel">Password</span>
                        <a className="forgotYourPassword" href="/forgot">Forgot your password?</a>
                        <input
                            className="formInput"
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />
                        <button
                            className="loginBtn"
                            disabled={!this.validateForm()}
                            onClick={this.handleSubmit}
                            type="submit"
                        >
                            Sign in
                        </button>
                        <p className="disclaimer">
                            By continuing, you agree to Congo's&nbsp;
                            <a 
                                href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Conditions of Use
                            </a> and&nbsp;
                            <a 
                                href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Privacy Notice.
                            </a>
                        </p>
                    </form>

                    <p className="newToCongo">New to Congo?</p>

                    <button
                        className="btn btn-light createAccountBtn"
                    >
                        <a className="createAccountAnchor" href="/signup">Create your Congo account</a>
                    </button>
                </div>
            </span>
        )
    }
}

export default Login;
