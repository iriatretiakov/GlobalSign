import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-gifs-grid',
  templateUrl: './gifs-grid.component.html',
  styleUrls: ['./gifs-grid.component.css']
})
export class GifsGridComponent implements OnInit {  
  @Input() gifs: any[] = [];
  totalCount: number = 0;
  offset: number = 0; 
  pageSize: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

}
