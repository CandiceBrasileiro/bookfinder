export const booksConverter = (books) => {
    const mappedBooks = books?.map((book) => {
        return bookConverter(book);
    })
    return mappedBooks;
};

export const bookConverter = (book) => {
    return {
        thumbnail: item.volumeInfo.imagesLinks && item.volumeInfo.imagesLinks.smallThumbnail,
        title: book.volumeInfo.title,
        author: item.volumeInfo.authors[0],
        publisher: item.volumeInfo.publisher,
        publishedDate: item.volumeInfo.publishedDate
    }
};