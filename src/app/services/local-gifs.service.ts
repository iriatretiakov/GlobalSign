import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { GifsGridComponent } from '../components/gifs-grid/gifs-grid.component';
import { Gif } from '../models/gif.class';
import { ReorderGifs } from '../models/reorder-gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalGifsService {
  
  gifs = new BehaviorSubject<Gif[]>([]); 
  constructor() { }

  getUpdatedData() {
    let userGifs = JSON.parse(localStorage.getItem('userGifs')!);
    this.gifs.next(userGifs);
  }

  getGifs() {
    return this.gifs.asObservable();
  }

  changeGifPosition(position: ReorderGifs) {
    let userGifs = JSON.parse(localStorage.getItem('userGifs')!);
    this.exchangeItems(userGifs, position.sourcePosition, position.targetPosition);
    localStorage.setItem('userGifs', JSON.stringify(userGifs));
    this.gifs.next(userGifs);
  }

  private exchangeItems(array: Gif[], sourcePos: number, targetPos: number) {
    let buffElement = array.splice(sourcePos, 1)[0];
    array.splice(targetPos, 0, buffElement);
  }

  addGif(gif: Gif) {
    gif.addedDate = new Date();
    let gifs = JSON.parse(localStorage.getItem('userGifs')!) as Gif[];
    if(gifs) {
      gifs.push(gif);
      gifs.sort((x , y) => { return new Date(y.addedDate).getTime() - new Date(x.addedDate).getTime(); });
      localStorage.setItem('userGifs', JSON.stringify(gifs));
    }
    else {
      localStorage.setItem('userGifs', JSON.stringify([gif]))
    }
    this.getUpdatedData();
  }

  removeGif(gif: Gif) {
    let gifs = JSON.parse(localStorage.getItem('userGifs')!) as Gif[];
    if(gifs) {
      let newGifData = gifs.filter(x => x.id != gif.id);
      localStorage.setItem('userGifs', JSON.stringify(newGifData));
    }
    this.getUpdatedData();
  }
  
}
