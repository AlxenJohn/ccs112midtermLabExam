import React, { Component } from 'react';

class BookList extends Component {
    render() {
        return (
            <div className="ui huge icon input">
                <input type="text" placeholder="Search huge..." />
                <i className="search icon"></i>
                <button className="ui button">Search</button>
            </div>
        );
    }
}

export default BookList;