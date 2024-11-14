import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './app.css';

const BookList = () => {
    const [books, setBooks] = useState([]);
  
    useEffect(() => {
      fetch('http://127.0.0.1:8000/api/books')
        .then(response => response.json())
        .then(data => setBooks(data.data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
  
    const handleEdit = (bookId) => {
        // Implement edit functionality here
        console.log(`Edit book with ID: ${bookId}`);
    };

    const handleDelete = (bookId) => {
        // Implement delete functionality here
        console.log(`Delete book with ID: ${bookId}`);
    };

    return (
      <div className="table-container">
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Author</Table.HeaderCell>
              <Table.HeaderCell>Action</Table.HeaderCell> {/* New Action Column */}
            </Table.Row>
          </Table.Header>
    
          <Table.Body>
            {books.map(book => (
              <Table.Row key={book.id}>
                <Table.Cell>{book.title}</Table.Cell>
                <Table.Cell>{book.author}</Table.Cell>
                <Table.Cell>
                  <Button onClick={() => handleEdit(book.id)} primary>Edit</Button>
                  <Button onClick={() => handleDelete(book.id)} negative>Delete</Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    );
};

export default BookList;