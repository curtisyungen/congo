import React, { Component } from "react";
import FilterOptions from "../FilterOptions/filterOptions";
import "./slideInMenu.css";

class SlideInMenu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showSlideInMenu: "show",
            isLoggedIn: false,
            user: null,
            showFiltersMenu: "hide",
        }
    }

    componentDidMount = () => {
        this.setState({
            showSlideInMenu: this.props.showSlideInMenu,
            isLoggedIn: this.props.isLoggedIn,
            user: this.props.user,
            showFiltersMenu: this.props.showFiltersMenu,
        });
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.showSlideInMenu !== this.props.showSlideInMenu) {
            this.setState({
                showSlideInMenu: this.props.showSlideInMenu,
                isLoggedIn: this.props.isLoggedIn,
                user: this.props.user,
            })
        }
    }

    setFilter = (param1, param2) => {
        return 0;
    }

    render() {
        return (
            <div
                className={`slideInMenu ${this.props.showSlideInMenu}`}
            >
                {this.state.isLoggedIn && this.state.user !== null ? (
                    <div className="slideInName">Hello, {this.state.user.name}</div>
                ) : (
                        <div className="slideInName">Hello, Sign in</div>
                    )}
                <ul className="slideInMenuList">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/gallery">Gallery</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                    <li>
                        <a href="/cart">Cart</a>
                    </li>
                    <li>
                        <a href="/orders">Orders</a>
                    </li>
                    {this.state.isLoggedIn ? (
                        <li>
                            <div
                                onClick={(event) => {
                                    event.preventDefault();
                                    this.props.logoutUser();
                                }}
                            >
                                Sign out
                            </div>
                        </li>
                    ) : (
                            <li>
                                <a href="/login">Sign in</a>
                            </li>
                        )}
                </ul>

                <ul>
                    <li>
                        <div
                            className="showFiltersMenuBtn"
                            onClick={this.props.toggleFiltersMenu}
                        >
                            Filters
                        </div>

                        {this.state.showFiltersMenu ? (
                            <FilterOptions
                                getAllBooks={this.props.getAllBooks}
                                getFilteredBooks={this.props.getFilteredBooks}
                                setFilter={this.setFilter}
                                showFiltersMenu={this.state.showFiltersMenu}
                            />
                        ) : (
                            <></>
                        )}
                    </li>
                </ul>
            </div>
        )
    }
}

export default SlideInMenu;