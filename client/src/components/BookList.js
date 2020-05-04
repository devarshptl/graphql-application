import React, {Component} from 'react';
import { graphql } from 'react-apollo';

import { getBooksQuery } from '../queries/queries';
import BookDetails from "./BookDetails";


class BookList extends Component {

    state ={
        selected : ""
    }

    displayBooks = () => {
        let data = this.props.data;
        if(data.loading){
            return (
                <div>Loading Books...</div>
            )
        }
        else {
            return data.books.map((book, key) => {
                return (
                    <li key={ book.id }  onClick={()=> this.setState({ selected: book.id})}>{book.name}</li>
                )
            })
        }
    }

    render() {
        return (
            <div>
                <ul id="book-list">
                    {this.displayBooks()}
                </ul>
                <BookDetails selected={this.state.selected}/>
            </div>
        );
    }
}

export default graphql(getBooksQuery)(BookList);
