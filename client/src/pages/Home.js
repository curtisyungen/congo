import React, { Component } from "react";
// import CountDown from "../components/CountDown/countDown";
import Book from "../components/Book/book";
import Sidebar from "../components/Sidebar/sidebar";
import Footer from "../components/Footer/footer";
import "./Home.css";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            books: [],
            message: "Loading...",
            userSearch: "",
            sortOption: "",
            activeFilter: false,
            availFilter: null,
            formatFilter: null,
            subjectFilter: null,
            filterString: null,
        }
    }

    componentDidMount = () => {

        if (window.location.protocol !== 'https:') {
            window.location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
        }

        let message = "";

        if (this.props.books.length === 0) {
            message = "Book sale ended August 1, 2019. No books available.";
        }

        this.setState({
            books: this.props.books,
            message: message,
            userSearch: this.props.userSearch,
            sortOption: "",
        });

        this.props.updateParentState();
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps !== this.props) {
            this.setState({
                books: this.props.books,
                userSearch: this.props.userSearch,
            });
        }
    }

    setFilter = (key, filter) => {
        if (key === "avail") {
            this.setAvailFilter(filter);
        }
        else if (key === "format") {
            this.setFormatFilter(filter);
        }
        else if (key === "subject") {
            this.setSubjectFilter(filter);
        }
    }

    setAvailFilter = (filter) => {
        if (filter === "avail") {
            filter = "Available";
        }
        else if (filter === "unavail") {
            filter = "Unavailable";
        }
        else {
            filter = null;
        }

        this.setState({
            availFilter: filter,
            activeFilter: true,
        }, () => {
            this.setFilterString();
        });
    }

    setFormatFilter = (filter) => {
        if (filter === "soft") {
            filter = "Paperback";
        }
        else if (filter === "hard") {
            filter = "Hardcover";
        }
        else {
            filter = null;
        }

        this.setState({
            formatFilter: filter,
            activeFilter: true,
        }, () => {
            this.setFilterString();
        });
    }

    setSubjectFilter = (filter) => {
        switch (filter) {
            case "nonfict": filter = "Non-fiction"; break;
            case "real estate": filter = "Real Estate"; break;
            case "social": filter = "Social Skills"; break;
            case "speaking": filter = "Public Speaking"; break;
            case "money": filter = "Money/Investing"; break;
            case "selfhelp": filter = "Self-help"; break;
            case "": filter = ""; break;
            case null: filter = null; break;
            default: filter = filter.charAt(0).toUpperCase() + filter.substr(1);
        }

        this.setState({
            subjectFilter: filter,
            activeFilter: true,
        }, () => {
            this.setFilterString();
        });
    }

    setFilterString = () => {
        let filterString = "";
        let filters = [];

        if (this.state.availFilter) {
            filters.push(this.state.availFilter);
        }
        if (this.state.formatFilter) {
            filters.push(this.state.formatFilter);
        }
        if (this.state.subjectFilter) {
            filters.push(this.state.subjectFilter);
        }

        let activeFilter = true;
        if (!(this.state.availFilter || this.state.formatFilter || this.state.subjectFilter)) {
            activeFilter = false;
        }

        filterString = filters.join(" : ");

        this.setState({
            filterString: filterString,
            activeFilter: activeFilter,
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
            else if (this.state.sortOption === "priceAsc") {
                this.sortByPriceAsc();
            }
            else if (this.state.sortOption === "priceDesc") {
                this.sortByPriceDesc();
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

    sortByPriceAsc = () => {
        let books = this.state.books;

        books.sort(this.comparePriceAsc);

        this.setState({
            books: books,
        });
    }

    comparePriceAsc = (a, b) => {
        if (a.price === b.price) {
            return 0;
        }
        else {
            return (a.price < b.price) ? -1 : 1;
        }
    }

    sortByPriceDesc = () => {
        let books = this.state.books;

        books.sort(this.comparePriceDesc);

        this.setState({
            books: books,
        });
    }

    comparePriceDesc = (a, b) => {
        if (a.price === b.price) {
            return 0;
        }
        else {
            return (a.price > b.price) ? -1 : 1;
        }
    }

    scrollToTop = () => {
        window.scrollTo(0, 0);
    }
    
    showSlideInMenu = () => {
        this.setState({
            showSlideInMenu: !this.state.showSlideInMenu,
        });
    }

    render() {
        return (
            <span>
                <div className="content">

                    {/* <CountDown /> */}

                    {/* RESULTS SUMMARY */}

                    <div
                        className="resultsSummary"
                    >
                        <span>
                            {this.state.books.length}
                            &nbsp;results&nbsp;
                            {this.state.activeFilter ? (
                                <span>for&nbsp;
                                <strong>{this.state.filterString}</strong>
                                </span>
                            ) : (
                                null
                            )}
                        </span>

                        <select
                            className="sortBy"
                            onChange={this.handleSortOption}
                            value={this.state.sortOption}
                        >
                            <option value="" selected>Sort by:</option>
                            <option value="title">Alpabetical by Title</option>
                            <option value="author">Alpabetical by Author Last</option>
                            <option value="priceAsc">Price - Low to High</option>
                            <option value="priceDesc">Price - High to Low</option>
                        </select>
                    </div>

                    {/* SIDE BAR */}

                    <Sidebar
                        getAllBooks={this.props.getAllBooks}
                        setActiveFilter={this.setActiveFilter}
                        setFilter={this.setFilter}
                        getFilteredBooks={this.props.getFilteredBooks}
                        filterString={this.state.filterString}
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


                </div>

                <Footer />
            </span>
        )
    }
}

export default Home;
