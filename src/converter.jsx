export const booksConverter = (books) => {
    const mappedBooks = books.items?.map((book) => {
        return bookConverter(book);
    })
    return mappedBooks;
};

export const bookConverter = (book) => {
    return {
        thumbnail: book.volumeInfo.imagesLinks && book.volumeInfo.imagesLinks.smallThumbnail,
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors[0],
        publisher: book.volumeInfo.publisher,
        publishedDate: book.volumeInfo.publishedDate
    }
};