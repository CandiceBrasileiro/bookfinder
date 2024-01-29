import {ItemBook, BookApi} from './interfaces';
import { Book } from "./interfaces";

export const booksConverter = (books: BookApi) => {
    const mappedBooks: Book[] = books.items?.map((book:ItemBook) => {
        return bookConverter(book);
    })
    return mappedBooks;
}

export const bookConverter = (book:ItemBook) => {

    const authors:string = book.volumeInfo?.authors && book.volumeInfo.authors[0] || ' - ';
    const published: string = book.volumeInfo.publisher;

    return {
        id: book.id,
        thumbnail: book.volumeInfo?.imageLinks && book.volumeInfo.imageLinks.smallThumbnail,
        title: book.volumeInfo?.title || ' - ',
        authors: authors,
        published: published || ' - ',
        publishedDate: book.volumeInfo.publishedDate || ' - ',
        description: book.volumeInfo?.description || ' - ',
        pageCount: book.volumeInfo?.pageCount || 0,
        webReaderLink: book.acessInfo?.webReaderLink || ' - '
    }
}