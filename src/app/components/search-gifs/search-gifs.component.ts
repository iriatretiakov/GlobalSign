import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-gifs',
  templateUrl: './search-gifs.component.html',
  styleUrls: ['./search-gifs.component.css']
})
export class SearchGifsComponent implements OnInit {
  @Output() searchGifs = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  search(searchTerm: string) {
      this.searchGifs.emit(searchTerm);
  }
}
