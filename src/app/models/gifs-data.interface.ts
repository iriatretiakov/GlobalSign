import { Gif } from "./gif.interface";

export interface GifsData {
    data: Gif[];
    total: number;
    offset: number;
    pageSize: number;
  }