import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Gif } from 'src/app/models/gif.class';
import { LocalGifsService } from 'src/app/services/local-gifs.service';
@Component({
  selector: 'app-user-gifs',
  templateUrl: './user-gifs.component.html',
  styleUrls: ['./user-gifs.component.css']
})
export class UserGifsComponent implements OnInit, OnDestroy {

  gifs: Gif[] = [];
  subscription: Subscription = new Subscription;
  
  constructor(private locaGifService: LocalGifsService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.locaGifService.getUpdatedData();
    this.subscription = this.locaGifService.getGifs()
      .subscribe((gifData: Gif[]) => {
        this.gifs = gifData;
      });
  }

  search(searchTerm: string) {
    if(searchTerm != '') {
    this.gifs = this.gifs
      .filter(x => 
        x.title.toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase()));
    }
    else {
      this.locaGifService.getUpdatedData(); 
    }
  }

}
