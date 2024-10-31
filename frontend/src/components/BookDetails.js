import React, { Component } from 'react';
import './app.css';
class BookDetails extends Component {
    render() {
        return (
            <table class="ui celled table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Published Year</th>
                        <th>Genre</th>
                        <th>Description</th>
                       
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John</td>
                        <td>No Action</td>
                        <td>1999</td>
                        <td>Fantasy</td>
                        <td>10/10 Book</td>
                        
                    </tr>
                    <tr>
                        <td>Jamie</td>
                        <td>Approved</td>
                        <td>1999</td>
                        <td>Fantasy</td>
                        <td>10/10 Book</td>
                      
                    </tr>
                    <tr>
                        <td>Jill</td>
                        <td>Denied</td>
                        <td>1999</td>
                        <td>Fantasy</td>
                        <td>10/10 Book</td>
                      
                    </tr>
                   
                </tbody>
            </table>
        );
    }

}

export default BookDetails;
