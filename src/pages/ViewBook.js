import React, { Component } from  'react';

import BookDetails from './component/BookDetails';

class ViewBook extends Component{

    render(){
        return(
            <div className="ui  container">
                    <BookDetails />
                 
                </div>
        );
    }
}

export default  ViewBook;
