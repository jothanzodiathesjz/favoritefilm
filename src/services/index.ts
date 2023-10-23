import data from './data.json';
export interface filmInterface{
    id:number,
    title: string,
    genre: string,
    deskripsi: string,
    rating:string,
    durasi: number,
    keterangan: string,
}
export type filmType = filmInterface[];
export let dataFilm: filmType = data.data;