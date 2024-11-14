import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import 'semantic-ui-css/semantic.min.css';
import './app.css';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      fetch('http://127.0.0.1:8000/api/books')
        .then(response => response.json())
        .then(data => setBooks(data.data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleEdit = (book) => {
        // Navigate to EditBook page with book data
        navigate('/edit-book', { state: { book } });
    };

    const handleDelete = async (bookId) => {
        try {
            await fetch(`http://127.0.0.1:8000/api/books/${bookId}`, {
                method: 'DELETE',
            });
            setBooks(books.filter((book) => book.id !== bookId));  // Update local state
            console.log(`Deleted book with ID: ${bookId}`);
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };

    return (
      <div className="table-container">
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Author</Table.HeaderCell>
              <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {books.map(book => (
              <Table.Row key={book.id}>
                <Table.Cell>{book.title}</Table.Cell>
                <Table.Cell>{book.author}</Table.Cell>
                <Table.Cell>
                  <Button onClick={() => handleEdit(book)} primary>Edit</Button>
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
