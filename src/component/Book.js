import React, { Component } from 'react';

class Book extends Component {
    shelfSelectChange(selectValue) {
        let {book, updateBook} = this.props;
        book.shelf = selectValue;
        updateBook(book);
    }

    render() {
        let { title, authors, imageLinks, shelf} = this.props.book;
        if (!authors) authors = ["Unknown Author"];
        if (!title) title = ["Unknown Title"];
        if (!imageLinks) imageLinks = {"thumbnail": "Unknown Link"};
        if (!imageLinks.thumbnail) imageLinks.thumbnail = "Unknown Link";

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${imageLinks.thumbnail}")` }}></div>
                    <div className="book-shelf-changer">
                        <select
                            value={shelf}
                            onChange={(event) => this.shelfSelectChange(event.target.value)}
                        >
                            <option value="message" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                {authors.map((author) => (
                    <div className="book-authors" key={author}>{author}</div>
                ))}
            </div>
        );
    }
}

export default Book;