export const booksConverter = (books) => {
    const mappedBooks = books.items?.map((book) => {
        return bookConverter(book);
    })
    return mappedBooks;
};

export const bookConverter = (book) => {

    const authors = book.volumeInfo?.authors && book.volumeInfo.authors[0] || ' - ';
    const published = book.volumeInfo.publisher;

    return {
        thumbnail: book.volumeInfo?.imageLinks && book.volumeInfo.imageLinks.smallThumbnail,
        title: book.volumeInfo?.title || ' - ',
        author: authors,
        publisher: published || ' - ',
        publishedDate: book.volumeInfo.publishedDate || ' - '
    }
};

