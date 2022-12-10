import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Gif } from 'src/app/models/gif.class';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { ReorderGifs } from 'src/app/models/reorder-gifs.interface';
import { GridType } from 'src/app/models/grid-type.enum';

@Component({
  selector: 'app-gifs-grid',
  templateUrl: './gifs-grid.component.html',
  styleUrls: ['./gifs-grid.component.css']
})
export class GifsGridComponent implements OnInit {  
  @Input() gifs: Gif[] = [];
  @Input() gridType: GridType = GridType.Api;
  @Output() changeGifs = new EventEmitter<ReorderGifs>();

  totalCount: number = 0;
  offset: number = 0; 
  pageSize: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<Gif[]>) {
    this.changeGifs.emit({ 
        sourcePosition: event.previousIndex,
        targetPosition: event.currentIndex
      });
  }

  isGridTypeApi() {
    return this.gridType === GridType.Api;
  }

}
