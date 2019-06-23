import React, { Component } from "react";
import Modal from "react-responsive-modal";
import API from "../../utils/API";
import "./book.css";

class Book extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: null,
            authorFirst: null,
            authorLast: null,
            price: null,
            avail: null,
            cover: null,
            tags: [],
            imageURL: null,
            openDetailView: false
        }
    }

    componentDidMount = () => {

        let cover = "Paperback";
        if (this.props.cover === "hard") {
            cover = "Hardcover";
        }


        this.setState({
            title: this.props.title,
            authorFirst: this.props.authorFirst,
            authorLast: this.props.authorLast,
            price: this.props.price,
            avail: this.props.avail,
            cover: cover,
            tags: this.props.tags,
            imageURL: this.props.imageURL,
        });
    }

    openDetailView = () => {

        this.setState({
            openDetailView: true,
        });

        API.getBookByTitle(this.state.title)
            .then((res) => {
                this.setState({
                    description: res.data.items[0].volumeInfo.description
                });
            });
    }

    closeDetailView = () => {
        this.setState({
            openDetailView: false,
        });
    }

    searchOnAmazon = (event) => {
        event.preventDefault();
        window.open(`https://www.amazon.com/s?k=${this.state.title}`)
    }

    addToCart = () => {
        let book = {
            title: this.state.title,
            authorFirst: this.state.authorFirst,
            authorLast: this.state.authorLast,
            price: this.state.price,
            imageURL: this.state.imageURL,
        }

        this.props.sendToCart(book);
    }

    render() {
        return (
            <span>
                <div
                    className="book"
                    onClick={(event) => {
                        event.preventDefault();
                        this.openDetailView();
                    }}
                >
                    <img className="bookCover" src={this.state.imageURL} alt={this.state.title} />
                </div>

                <Modal
                    open={this.state.openDetailView}
                    onClose={this.closeDetailView}
                    className="detailView"
                >

                    <div className="detailBookImage">
                        <img name="detailBookCover" className="detailBookCover" src={this.state.imageURL} alt={this.state.title} />
                        <span for="detailBookCover" className="imageSource">Image source: Amazon.com</span>
                    </div>

                    <div className="bookInfoHeader">
                        <p className="bookTitle">{this.state.title}</p>
                        <span className="bookAuthor">by {this.state.authorFirst} {this.state.authorLast}</span>
                    </div>

                    {this.state.avail === "avail" ? (
                        <div className="buyOptionList">
                            <div className="buyOption">
                                <span className="buyCoverType">{this.state.cover}</span>
                                <span className="buyPrice">{`$${(Math.round(this.state.price * 100) / 100).toFixed(2)}`}</span>
                            </div>
                        </div>
                    ) : (
                            <></>
                        )}

                    <div id="buyBox">

                        <div className="buyBoxPrice">{`$${(Math.round(this.state.price * 100) / 100).toFixed(2)}`}</div>

                        <p className={`bookStatus book-${this.state.avail}`}>{this.state.avail === "avail" ? (`In Stock.`) : (`Out of Stock.`)}</p>
                        <p className="shipsFromCongo">{`${this.state.avail === "avail" ? ("Ships from and sold by Congo.") : ("Guess you'd better check on Amazon.")}`}</p>

                        {this.state.avail === "avail" ? (
                            <button
                                className="btn btn-sm button addToCartBtn"
                                onClick={(event) => {
                                    event.preventDefault();
                                    this.addToCart();
                                }}
                            >
                                Add to Cart
                        </button>
                        ) : (
                            <button
                                className="btn btn-outline-dark btn-sm button"
                                onClick={this.searchOnAmazon}
                            >
                                Amazon
                            </button>
                        )}
                    </div>

                    <div className="bookInfoBody">
                        <p className="bookDescription">{this.state.description}</p>
                    </div>
                </Modal>
            </span>
        )
    }

}

export default Book;