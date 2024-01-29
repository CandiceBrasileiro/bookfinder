import axios from "axios";

export const getBooks: object = async (search:string) => {
    const url: string = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCCAAqjtJh-HCUDD0KFpSrtUm5k2_EIos0&maxResults=40`
    const response: object = await axios.get(url);
    return response;
}