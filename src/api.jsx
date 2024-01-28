import axios from 'axios';
import {booksConverter} from './converter';

export const getBooks = async(search) => {
    const response = await axios.get `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCCAAqjtJh-HCUDD0KFpSrtUm5k2_EIos0&maxResults=40`
    const converter = booksConverter(response.data);

    return converter;
}