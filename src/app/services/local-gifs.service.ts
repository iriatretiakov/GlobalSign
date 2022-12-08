import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Gif } from '../models/gif.class';

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

  addGif(gif: Gif) {
    gif.addedDate = new Date();
    let gifs = JSON.parse(localStorage.getItem('userGifs')!);
    if(gifs) {
      gifs.push(gif);
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
