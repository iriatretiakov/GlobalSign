import { Component, Input, OnInit } from '@angular/core';
import { Gif } from 'src/app/models/gif.interface';

@Component({
  selector: 'app-gif-actions',
  templateUrl: './gif-actions.component.html',
  styleUrls: ['./gif-actions.component.css']
})
export class GifActionsComponent implements OnInit {
  @Input() gif: Gif = {url: '', id: '', isAdded: false};

  constructor() { }

  ngOnInit(): void {
  }

}
