export interface Book {
    id: string;
    title: string;
    authors: string;
    published: string;
    publishedDate: string;
    description: string;
    pageCount:number;
    webReaderLink: string;
}

export interface BookApi {
    kind: string;
    totalItems: number;
    items: ItemBook[];
}

export interface ItemBook {
    id: string;
    volumeInfo: VolumeInfo;
    acessInfo: AcessInfo;
}

export interface VolumeInfo {
    title: string; 
    authors:string[]; 
    publisher: string; 
    publishedDate: string; 
    description: string;
    pageCount: number;
    imageLinks: ImageLinks; 
    infoLink: string;
}

interface ImageLinks {
    smallThumbnail: string;
    thumbanil: string;
}

interface AcessInfo {
    webReaderLink: string;
}