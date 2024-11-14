import React, { useState, useEffect } from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import axios from 'axios';

const BookForm = ({ initialData = {}, isEditMode = false }) => {
    const [title, setTitle] = useState(initialData.title || '');
    const [author, setAuthor] = useState(initialData.author || '');
    const [description, setDescription] = useState(initialData.description || '');
    const [publishedYear, setPublishedYear] = useState(initialData.published_year || '');
    const [genre, setGenre] = useState(initialData.genre || '');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title || '');
            setAuthor(initialData.author || '');
            setDescription(initialData.description || '');
            setPublishedYear(initialData.published_year || '');
            setGenre(initialData.genre || '');
        }
    }, [initialData]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const bookData = {
            title,
            author,
            description,
            published_year: publishedYear,
            genre,
        };

        try {
            if (isEditMode) {
                await axios.put(`http://127.0.0.1:8000/api/books/${initialData.id}`, bookData);
                setSuccessMessage('Book updated successfully!');
            } else {
                await axios.post('http://127.0.0.1:8000/api/books', bookData);
                setSuccessMessage('Book created successfully!');
            }
            setErrorMessage('');
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrorMessage('Error saving book.');
        }
    };

    return (
        <div className="form-container">
            {successMessage && (
                <Message success>
                    <Message.Header>{successMessage}</Message.Header>
                </Message>
            )}
            {errorMessage && (
                <Message error>
                    <Message.Header>{errorMessage}</Message.Header>
                </Message>
            )}

            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Title</label>
                    <input
                        type="text"
                        placeholder="Book Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </Form.Field>
                
                <Form.Field>
                    <label>Author</label>
                    <input
                        type="text"
                        placeholder="Author Name"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </Form.Field>
                
                <Form.Field>
                    <label>Description</label>
                    <textarea
                        placeholder="Book Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </Form.Field>
                
                <Form.Field>
                    <label>Published Year</label>
                    <input
                        type="number"
                        placeholder="e.g., 2023"
                        value={publishedYear}
                        onChange={(e) => setPublishedYear(e.target.value)}
                        required
                    />
                </Form.Field>
                
                <Form.Field>
                    <label>Genre</label>
                    <input
                        type="text"
                        placeholder="Book Genre"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        required
                    />
                </Form.Field>
                
                <Button type="submit" primary>
                    {isEditMode ? 'Update Book' : 'Create Book'}
                </Button>
            </Form>
        </div>
    );
};

export default BookForm;
