import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Gif } from 'src/app/models/gif.class';
import { GridType } from 'src/app/models/grid-type.enum';
import { LocalGifsService } from 'src/app/services/local-gifs.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-gif-actions',
  templateUrl: './gif-actions.component.html',
  styleUrls: ['./gif-actions.component.css']
})
export class GifActionsComponent implements OnInit {
  @Input() gif: Gif = new Gif();
  @Input() gridType: GridType = GridType.Api;
  @Output() saveFile = new EventEmitter<string>(); 
  constructor(private userGifService: LocalGifsService) { }

  ngOnInit(): void {
  }

  addGif() {
    this.userGifService.addGif(this.gif);
  }

  removeGif() {
    this.userGifService.removeGif(this.gif);
  }

  isApiType() {
    return this.gridType === GridType.Api;
  }

  saveGif() {
    saveAs(this.gif.url, this.gif.title + '.gif');
  }
}
