import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI';
import { Link } from 'react-router-dom';
import Book from './Book'

class SearchBook extends Component {
    state = {
        "books": [],
    }

    bookSearch(query) {
        const searchQuery = query.trim();
        if (searchQuery === '') {
            this.setState({ "books": [] });
            return;
        };

        BooksAPI.search(searchQuery, 10).then((books) => {
            if (books && books.length) {
                let normalizedBooks = books.map((book) => {
                    book.shelf = book.shelf ? book.shelf : 'none'
                    return book
                });
                this.setState({ "books": normalizedBooks });
            }
        });
    }

    render() {
        const {books} = this.state;
        const {updateBook} = this.props;

        return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"
                    onChange={(event) => this.bookSearch(event.target.value)}
                />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                  {
                      books.map((book)=>(
                          <Book key={book.id} book={book} updateBook={updateBook}/>
                      ))
                  }
              </ol>
            </div>
          </div>
        )
    }
}

export default SearchBook;