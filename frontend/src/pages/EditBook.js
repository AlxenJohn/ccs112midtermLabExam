import React from 'react';

const EditBook = ({ match }) => {
    const { id } = match.params;

    return (
        <div>
            <h1>Edit Book {id}</h1>
            {/* Add your form for editing the book here */}
        </div>
    );
};

export default EditBook;