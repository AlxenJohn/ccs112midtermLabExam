import React, { Component } from  'react';

import BookList from './component/BookList';


class Home extends Component{

    render(){
        return (
            <div className="ui  container">
                    <BookList />
                </div>
        );
    }
}

export default  Home;
