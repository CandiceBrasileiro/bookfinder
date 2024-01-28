export const booksConverter = (books) => {
    const mappedBooks = books.items?.map((book) => {
        return bookConverter(book);
    })
    return mappedBooks;
};

export const bookConverter = (book) => {

    const authors = book.volumeInfo?.authors && book.volumeInfo.authors[0];

    return {
        thumbnail: book.volumeInfo?.imagesLinks && book.volumeInfo.imagesLinks.smallThumbnail,
        title: book.volumeInfo?.title || '',
        author: authors,
        publisher: book.volumeInfo.publisher || '',
        publishedDate: book.volumeInfo.publishedDate || ''
    }
};

