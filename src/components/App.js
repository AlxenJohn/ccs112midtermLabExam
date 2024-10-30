import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BookForm from './BookForm';
import BookDetails from './BookDetails';
import BookList from './BookList';
import "./app.css";
import BookList from './BookList';
import EditBook from './EditBook'; // Import your EditBook component
import ViewBook from './ViewBook'; // Import your ViewBook component

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="ui fixed inverted menu">
                        <div className="ui container">
                            <Link to="/" className="header item">Home</Link>
                            <Link to="/add-book" className="header item">Add Book</Link>
                            <Link to="/edit-book" className="header item">Edit Book</Link>
                            <Link to="/view-book" className="header item">View Book</Link>
                        </div>
                    </div>

                    <div className="ui main container">
                        <Routes>
                            <Route path="/" element={<BookList />} />
                            <Route path="/add-book" element={<BookForm />} />
                            <Route path="/edit-book" element={<BookDetails />} />
                            <Route path="/view-book" element={<BookDetails />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;