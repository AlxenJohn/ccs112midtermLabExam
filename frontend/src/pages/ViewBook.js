import React from 'react';

const ViewBook = ({ match }) => {
    const { id } = match.params;

    return (
        <div>
            <h1>View Book {id}</h1>
            {/* Display book details here */}
        </div>
    );
};

export default ViewBook;