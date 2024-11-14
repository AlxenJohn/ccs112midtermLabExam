import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import ViewBook from './pages/ViewBook';
import EditBook from './pages/EditBook';


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
                            <Route path="/" element={<Home />} /> 
                            <Route path="/add-book" element={<AddBook />} />
                            <Route path="/View" element={<ViewBook />} />
                            <Route path="/edit-book" element={<EditBook />} />

                        </Routes>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;