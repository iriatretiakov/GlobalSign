import { Component, Input, OnInit } from '@angular/core';
import { Gif } from 'src/app/models/gif.interface';
import { LocalGifsService } from 'src/app/services/local-gifs.service';

@Component({
  selector: 'app-gif-actions',
  templateUrl: './gif-actions.component.html',
  styleUrls: ['./gif-actions.component.css']
})
export class GifActionsComponent implements OnInit {
  @Input() gif: Gif = {url: '', id: ''};
  @Input() gifState: boolean = false;
  constructor(private userGifService: LocalGifsService) { }

  ngOnInit(): void {
  }

  addGif() {
    this.userGifService.addGif(this.gif);
  }

  removeGif() {
    this.userGifService.removeGif(this.gif);
  }
}
