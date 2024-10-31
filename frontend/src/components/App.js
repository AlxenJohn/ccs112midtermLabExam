import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import BookForm from './BookForm';
import BookList from './BookList';
import EditBook from './EditBook'; // Import your EditBook component
import ViewBook from './ViewBook'; // Import your ViewBook component
import "./app.css";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="ui fixed inverted menu">
                        <div className="ui container">
                            <Link to="/" className="header item">Home</Link>
                            <Link to="/add-book" className="header item">Add Book</Link>
                        </div>
                    </div>

                    <div className="ui main container">
                        <Switch>
                            <Route path="/" exact component={BookList} />
                            <Route path="/add-book" component={BookForm} />
                            <Route path="/edit/:id" component={EditBook} />
                            <Route path="/view/:id" component={ViewBook} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;