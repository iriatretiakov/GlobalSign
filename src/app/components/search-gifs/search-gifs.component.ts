import { Component, OnInit } from '@angular/core';
import { GiphyApiService } from 'src/app/services/giphy-api.service';

@Component({
  selector: 'app-search-gifs',
  templateUrl: './search-gifs.component.html',
  styleUrls: ['./search-gifs.component.css']
})
export class SearchGifsComponent implements OnInit {

  constructor(private giphyApiService: GiphyApiService) { }

  ngOnInit(): void {
  }

  search(searchTerm: string) {
    if(searchTerm != '') {
      this.giphyApiService.searchGif(searchTerm);
    }
  }
}
