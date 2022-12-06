import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Gif } from 'src/app/models/gif.interface';

@Component({
  selector: 'app-gifs-grid',
  templateUrl: './gifs-grid.component.html',
  styleUrls: ['./gifs-grid.component.css']
})
export class GifsGridComponent implements OnInit {  
  @Input() gifs: Gif[] = [];
  @Input() isSaved: boolean = false;
  totalCount: number = 0;
  offset: number = 0; 
  pageSize: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

}
