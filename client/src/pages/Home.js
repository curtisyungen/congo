import React, { Component } from "react";
import Container from "../components/Container/container";
import Book from "../components/Book/book";
import Sidebar from "../components/Sidebar/sidebar";
import "./Home.css";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            books: [
                {
                    title: "Test",
                    authorFirst: "Test",
                    authorLast: "Test",
                    price: 0.00,
                    imageURL: "https://images-na.ssl-images-amazon.com/images/I/61Lc9Qd0vgL.jpg",
                }
            ],
            message: "Loading...",
            activeFilter: "books",
            userSearch: "",
            sortOption: "",
        }
    }

    componentDidMount = () => {

        let message = "";

        if (this.props.books.length === 0) {
            message = "No books found.";
        }

        this.setState({
            // books: this.props.books,
            message: message,
            userSearch: this.props.userSearch,
            sortOption: "",
        });

        this.props.updateParentState();
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps !== this.props) {
            this.setState({
                // books: this.props.books,
                userSearch: this.props.userSearch,
            });
        }
    }

    getActiveFilter = (filter) => {
        this.setState({
            activeFilter: filter,
        });
    }

    handleSortOption = (event) => {
        this.setState({
            sortOption: event.target.value,
        }, () => {
            if (this.state.sortOption === "title") {
                this.sortByTitle();
            }
            else if (this.state.sortOption === "author") {
                this.sortByAuthor();
            }
        });
    }

    sortByTitle = () => {
        let books = this.state.books;

        books.sort(this.compareTitle);

        this.setState({
            books: books,
        });
    }

    compareTitle = (a, b) => {
        if (a.title === b.title) {
            return 0;
        }
        else {
            return (a.title < b.title) ? -1 : 1;
        }
    }

    sortByAuthor = () => {
        let books = this.state.books;

        books.sort(this.compareAuthor);

        this.setState({
            books: books,
        });
    }

    compareAuthor = (a, b) => {
        if (a.authorLast === b.authorLast) {
            return 0;
        }
        else {
            return (a.authorLast < b.authorLast) ? -1 : 1;
        }
    }

    render() {
        return (
            <Container>

                {/* RESULTS SUMMARY */}

                <div
                    className="resultsSummary"
                >
                    <span>
                        {this.state.books.length}
                        &nbsp;results&nbsp;
                    {this.state.activeFilter ? (`for ${this.state.activeFilter}`) : (null)}
                        {this.state.userSearch ? (`: "${this.state.userSearch}"`) : (null)}
                    </span>

                    <select
                        className="sortBy"
                        onChange={this.handleSortOption}
                        value={this.state.sortOption}
                    >
                        <option value="" disabled selected>Sort by:</option>
                        <option value="title">Alpabetical by Title</option>
                        <option value="author">Alpabetical by Author Last</option>
                    </select>
                </div>

                <Sidebar
                    getAllBooks={this.props.getAllBooks}
                    getAvailableBooks={this.props.getAvailableBooks}
                    getUnavailableBooks={this.props.getUnavailableBooks}
                    getPaperbacks={this.props.getPaperbacks}
                    getHardcovers={this.props.getHardcovers}
                    getSubject={this.props.getSubject}
                    getActiveFilter={this.getActiveFilter}
                />
                {/* BOOK LIST */}

                <div
                    className="bookList"
                >
                    {this.state.books && this.state.books.length > 0 ? (

                        <span>
                            {this.state.books.map(book => (
                            <Book
                                key={book.title + Math.random()}
                                title={book.title}
                                authorFirst={book.authorFirst}
                                authorLast={book.authorLast}
                                price={book.price}
                                avail={book.avail}
                                cover={book.cover}
                                condition={book.condition}
                                imageURL={book.imageURL}
                                tags={book.tags}
                                sendToCart={this.props.sendToCart}
                            />
                            ))}
                        </span>
                    ) : (
                            <div>{this.state.message}</div>
                        )}
                </div>
            </Container>
        )
    }

}

export default Home;