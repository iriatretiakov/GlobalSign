import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Gif } from 'src/app/models/gif.interface';
import { GifsData } from 'src/app/models/gifs-data.interface';
import { GiphyApiService } from 'src/app/services/giphy-api.service';
import { LocalGifsService } from 'src/app/services/local-gifs.service';

@Component({
  selector: 'app-api-gifs',
  templateUrl: './api-gifs.component.html',
  styleUrls: ['./api-gifs.component.css']
})
export class ApiGifsComponent implements OnInit, OnDestroy {

  gifs: Gif[] = [];
  gifToShow: Gif[] = [];
  localGifs: Gif[] = [];

  gifSubscription: Subscription = new Subscription;
  localGifSubscription: Subscription = new Subscription;
  
  constructor(private giphyApiService: GiphyApiService,
    private localGifService: LocalGifsService) { }

  ngOnDestroy(): void {
    this.gifSubscription.unsubscribe();
    this.localGifSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.gifSubscription = this.giphyApiService.getGifs()
      .subscribe((response: GifsData) => {
        this.gifs = response.data;
        this.filterGifs();
      });
    this.localGifSubscription = this.localGifService.getGifs()
      .subscribe((response: GifsData) => {
        this.localGifs = response.data;
        this.filterGifs();
      });
    this.giphyApiService.getInitialData();
    this.localGifService.getUpdatedData();
  }

  search(searchTerm: string) {
    this.giphyApiService.searchGif(searchTerm);
  }

  private filterGifs() {
    this.gifToShow = this.gifs.filter(x => !this.localGifs.find(z => z.id === x.id));
  }
}
