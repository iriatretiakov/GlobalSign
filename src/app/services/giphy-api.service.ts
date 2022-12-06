import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GifsData } from '../models/gifs-data.interface';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GiphyApiService {
  private searchTerm: string = '';
  private baseUrl: string = 'https://api.giphy.com/v1/gifs/';
  gifs = new BehaviorSubject<GifsData>({data: [], total:0, offset:0, pageSize:0});

  constructor(private httpClient: HttpClient) { }

  getInitialData() {
    return this.httpClient.get(`${this.baseUrl}trending?api_key=${environment.giphyApiKey}`)
    .subscribe((response : any) => {
      this.gifs.next({ 
        data: response.data.map((x:any) => { // TODO change when added pagination service 
          return {
            url: x.images.downsized.url,
            id: x.id,
            isAdded: false
        }}), 
        total: response.pagination.total_count, 
        offset: response.pagination.offset,
        pageSize: 1 
      });
    });
  }

  searchGif(term: string) {
    this.searchTerm = term;
    return this.httpClient.get(`${this.baseUrl}search?q=${term}&api_key=${environment.giphyApiKey}`)
    .subscribe((response : any) => {
      this.gifs.next({ 
        data: response.data.map((x:any) => { // TODO change when added pagination service 
          return {
            url: x.images.downsized.url,
            id: x.id,
            isAdded: false
        }}),
        total: response.pagination.total_count, 
        offset: response.pagination.offset,
        pageSize: 1  });
    });
  }

  getGifs() {
    return this.gifs.asObservable();
  }
}
