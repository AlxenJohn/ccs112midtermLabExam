import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Button, Header, Message } from 'semantic-ui-react';

const EditBook = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { book } = location.state || {};

    const [title, setTitle] = useState(book?.title || '');
    const [author, setAuthor] = useState(book?.author || '');
    const [description, setDescription] = useState(book?.description || '');
    const [publishedYear, setPublishedYear] = useState(book?.published_year || '');
    const [genre, setGenre] = useState(book?.genre || '');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (!book) {
            navigate('/');  // Redirect if no book data is passed
        }
    }, [book, navigate]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://127.0.0.1:8000/api/books/${book.id}`, {
                title,
                author,
                description,
                published_year: publishedYear,
                genre,
            });
            navigate('/');  // Redirect to home after update
        } catch (error) {
            setErrorMessage('Error updating book: ' + error.message);
        }
    };

    return (
        <div className="form-container">
            <Header as="h2">Edit Book</Header>
            {errorMessage && <Message error>{errorMessage}</Message>}
            <Form onSubmit={handleUpdate}>
                <Form.Field>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Author:</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Published Year:</label>
                    <input
                        type="number"
                        value={publishedYear}
                        onChange={(e) => setPublishedYear(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Genre:</label>
                    <input
                        type="text"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                    />
                </Form.Field>
                <Button type="submit" primary>Update Book</Button>
            </Form>
        </div>
    );
};

export default EditBook;
