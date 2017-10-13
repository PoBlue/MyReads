import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

import BookList from './component/BookList';
import SearchBook from './component/SearchBook';

import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {
  state = {
    books: null,
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books });
    });
  }


  updateBook(bookToUpdate) {
    const { books } = this.state;

    let updatedBooks = books.map((book) => {
      if (book.id === bookToUpdate.id) {
        return bookToUpdate;
      } else {
        return book;
      }
    });

    BooksAPI.update(bookToUpdate.id, bookToUpdate.shelf).then(
      this.setState({ books: updatedBooks })
    );
  }

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        {false ? (
          <SearchBook />
        ) : (
            <BookList books={books}
              updateBook={this.updateBook.bind(this)}
            />
          )}
      </div>
    )
  }
}

export default BooksApp
