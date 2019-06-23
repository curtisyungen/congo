import React, { Component } from "react";
import "./searchSuggestions.css";

class SearchSuggestions extends Component {

    constructor(props) {
        super(props);

        this.state = {
            suggestions: [],
        }
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.suggestions !== this.props.suggestions) {
            this.setState({
                suggestions: this.props.suggestions,
            });
        }
    }

    render() {
        return (
            <div
                className="searchSuggestions"
            >
                {this.state.suggestions.constructor === Array && this.props.suggestions.length > 0 ? (
                    this.props.suggestions.map(suggestion => (
                        <div 
                            className="suggestion"
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.chooseSearchSuggestion(suggestion.title)
                            }}
                        >
                            {`${suggestion.title} by ${suggestion.authorFirst} ${suggestion.authorLast}`}
                        </div>
                    ))
                ):( 
                    <></>
                )}
            </div>
        )
    }
}

export default SearchSuggestions;