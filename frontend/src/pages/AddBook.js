import React, { Component } from  'react';

import BookForm from './component/BookForm';

class AddBook extends Component{

    render(){
        return(
            <div className="ui  container">
                    <BookForm />
                 
                </div>
        );
    }
}

export default  AddBook;
