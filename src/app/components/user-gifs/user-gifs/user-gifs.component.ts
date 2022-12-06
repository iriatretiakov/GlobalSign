import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Gif } from 'src/app/models/gif.interface';
import { GifsData } from 'src/app/models/gifs-data.interface';
import { LocalGifsService } from 'src/app/services/local-gifs.service';

@Component({
  selector: 'app-user-gifs',
  templateUrl: './user-gifs.component.html',
  styleUrls: ['./user-gifs.component.css']
})
export class UserGifsComponent implements OnInit, OnDestroy {

  gifs: Gif[] = [];
  subscripton: Subscription = new Subscription;
  
  constructor(private locaGifService: LocalGifsService) { }

  ngOnDestroy(): void {
    this.subscripton.unsubscribe();
  }

  ngOnInit(): void {
    this.locaGifService.getUpdatedData();
    this.subscripton = this.locaGifService.getGifs()
      .subscribe((gifData: GifsData) => {
        this.gifs = gifData.data;
      });
  }

}
