import React, { Component } from 'react';
import './app.css'; // Make sure to import the CSS file

class BookForm extends Component {
    render() {
        return (
            <div className="ui form">
                <div className="form-container">
                    <div className="field">
                        <label>Title</label>
                        <input type="text" name="title" placeholder="Title" />
                    </div>
                    <div className="field">
                    <label>author</label>
                        <input type="text" name="author" placeholder="Author" />
                    </div>
                    <div className="field">
                    <label>Published Year</label>
                        <input type="number" name="published_year" placeholder="Published Year" />
                    </div>
                    <div className="field">
                    <label>Genre</label>
                        <input type="text" name="genre" placeholder="Genre" />
                    </div>
                    <div className="field">
                        <label>Description</label>
                        <textarea rows="2" cols="50" name="description" placeholder="Description"></textarea>
                    </div>
                    <div className='field'>
                        <button className='ui primary button submit-button'>Add Book</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookForm;