import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Gif } from '../models/gif.class';

@Injectable({
  providedIn: 'root'
})
export class GiphyApiService {
  private searchTerm: string = '';
  private baseUrl: string = 'https://api.giphy.com/v1/gifs/';
  gifs = new BehaviorSubject<Gif[]>([]);

  constructor(private httpClient: HttpClient) { }

  getInitialData() {
    return this.httpClient.get(`${this.baseUrl}trending?api_key=${environment.giphyApiKey}`)
    .subscribe((response : any) => {
      this.gifs.next(response.data.map((x:any) => {
          return {
            url: x.images.downsized.url,
            id: x.id,
            title: x.title
        }
      }));
    });
  }

  searchGif(term: string) {
    this.searchTerm = term;
    return this.httpClient.get(`${this.baseUrl}search?q=${term}&api_key=${environment.giphyApiKey}`)
    .subscribe((response : any) => {
      this.gifs.next(response.data.map((x:any) => {
          return {
            url: x.images.downsized.url,
            id: x.id,
            title: x.title
        }}));
    });
  }

  getGifs() {
    return this.gifs.asObservable();
  }
}
