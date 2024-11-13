import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import BookDetails from './BookDetails'; 


import BookList from './BookList';
import BookForm from './BookForm';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="ui fixed inverted menu">
                        <div className="ui container">
                            <Link to="/" className="header item">Home</Link>
                            <Link to="/Add-book" className="header item">Add Book</Link>
                            <Link to="/View" className="header item">View</Link>
                            <Link to="/Edit" className="header item">Edit</Link>
                        </div>
                    </div>

                    <div className="ui main container">
                        <Routes>
                            <Route path="/" element={<BookList />} /> 
                            <Route path="/add-book" element={<BookForm />} />
                            <Route path="/View" element={<BookDetails />} />
                            <Route path="/Edit" element={<BookForm />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;