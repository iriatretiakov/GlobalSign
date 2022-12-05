import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GiphyApiService } from 'src/app/services/giphy-api.service';

@Component({
  selector: 'app-api-gifs',
  templateUrl: './api-gifs.component.html',
  styleUrls: ['./api-gifs.component.css']
})
export class ApiGifsComponent implements OnInit, OnDestroy {

  gifs: any[] = [];
  subscripton: Subscription = new Subscription;
  
  constructor(private giphyApiService: GiphyApiService) { }

  ngOnDestroy(): void {
    this.subscripton.unsubscribe();
  }

  ngOnInit(): void {
    
    this.giphyApiService.getInitialData();
    this.subscripton = this.giphyApiService.getGifs()
      .subscribe((response: any) => {
        this.gifs = response.data;
      })
  }

  search(searchTerm: string) {
    this.giphyApiService.searchGif(searchTerm);
  }

}
