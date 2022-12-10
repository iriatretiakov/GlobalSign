import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Gif } from 'src/app/models/gif.class';
import { LocalGifsService } from 'src/app/services/local-gifs.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { ReorderGifs } from 'src/app/models/reorder-gifs.interface';
import { GridType } from 'src/app/models/grid-type.enum';

@Component({
  selector: 'app-user-gifs',
  templateUrl: './user-gifs.component.html',
  styleUrls: ['./user-gifs.component.css']
})
export class UserGifsComponent implements OnInit, OnDestroy {

  gifs: Gif[] = [];
  subscription: Subscription = new Subscription;
  gridType: GridType = GridType.Local;
  constructor(private localGifService: LocalGifsService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.localGifService.getUpdatedData();
    this.subscription = this.localGifService.getGifs()
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
      this.localGifService.getUpdatedData(); 
    }
  }

  orderItems(changeItems: ReorderGifs) {
    this.localGifService.changeGifPosition(changeItems);
  }

}
