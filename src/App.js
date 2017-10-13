import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import * as BooksAPI from './BooksAPI';

import BookList from './component/BookList';
import SearchBook from './component/SearchBook';



class BooksApp extends React.Component {
  state = {
    books: null,
  }

  componentWillMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books });
    });
  }

  render() {
    const { books } = this.state;
    if (!books) return null;

    return (
      <div className="app">
        {false ? (
          <SearchBook/>
        ) : (
          <BookList books={books}/>
        )}
      </div>
    )
  }
}

export default BooksApp
