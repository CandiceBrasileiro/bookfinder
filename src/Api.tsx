import axios from "axios";
import {booksConverter} from './converter';
import { Book } from "./interfaces";

export const getBooks = async (search:string) => {
    const url: string = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCCAAqjtJh-HCUDD0KFpSrtUm5k2_EIos0&maxResults=40`
    const response = await axios.get(url);
    console.log('aaaaa',response)
    const converter:Book[] = booksConverter(response.data)
    return converter;
}