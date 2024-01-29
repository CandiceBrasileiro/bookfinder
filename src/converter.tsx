import {ItemBook} from './interfaces';

export const bookConverter = (book:ItemBook) => {

    const authors:string = book.volumeInfo?.authors && book.volumeInfo.authors[0] || ' - ';
    const published: string = book.volumeInfo.publisher;

    return {
        id: book.id,
        thumbnail: book.volumeInfo?.imageLinks && book.volumeInfo.imageLinks.smallThumbnail,
        title: book.volumeInfo?.title || ' - ',
        author: authors,
        publisher: published || ' - ',
        publishedDate: book.volumeInfo.publishedDate || ' - ',
        description: book.volumeInfo?.description || ' - ',
        pageCount: book.volumeInfo?.pageCount || ' - ',
        webReaderLink: book.acessInfo?.webReaderLink || ' - '
    }
}