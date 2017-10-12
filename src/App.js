import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import * as BooksAPI from './BooksAPI';

import BookList from './component/BookList';
import SearchBook from './component/SearchBook';



class BooksApp extends React.Component {
  componentWillMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books });
    });
  }

  render() {
    return (
      <div className="app">
        {false ? (
          <SearchBook></SearchBook>
        ) : (
          <BookList></BookList>
        )}
      </div>
    )
  }
}

export default BooksApp
